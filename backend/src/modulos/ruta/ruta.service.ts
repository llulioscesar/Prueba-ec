import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Ruta } from './ruta.entity';
import { Repository } from 'typeorm';

@Injectable()
export class RutaService {
  constructor(
    @InjectRepository(Ruta)
    private repositorio: Repository<Ruta>,
  ) {}

  async getAll(): Promise<Array<Ruta>> {
    try {
      return await this.repositorio.find();
    } catch (e) {
      throw new InternalServerErrorException(e);
    }
  }

  async create(ruta: Ruta): Promise<Ruta> {
    try {
      const nueva = new Ruta();
      nueva.id = ruta.id;
      nueva.padreid = ruta.padreid;
      nueva.nombre = ruta.nombre;
      return await this.repositorio.save(nueva);
    } catch (e) {
      throw new InternalServerErrorException(e);
    }
  }

  async delete(id: string): Promise<any> {
    try {
      const ruta = await this.repositorio.findOne(id);
      if (ruta) {
        await this.repositorio.delete(ruta);
      }
      return {
        ok: ruta ? true : false,
      };
    } catch (e) {
      throw new InternalServerErrorException(e);
    }
  }

  async getPadresFromRutaID(id: string): Promise<Array<Ruta>> {
    try {
      return await this.repositorio.manager.connection.query(`
      with recursive rutas_cte as (
          select *
          from rutas
          where id = '${id}'
          union all
          select rutas.*
          from rutas
                   join rutas_cte on rutas_cte.padreid = rutas.id
      )
      select * from rutas_cte;
      `);
    } catch (e) {
      throw new InternalServerErrorException(e);
    }
  }

  async getHijosFromRutaID(id: string): Promise<Array<Ruta>> {
    try {
      return await this.repositorio.manager.connection.query(`
      with recursive rutas_cte as (
          select *
          from rutas
          where id = '${id}'
          union all
          select rutas.*
          from rutas
                   join rutas_cte on rutas_cte.id = rutas.padreid
      )
      select * from rutas_cte;
      `);
    } catch (e) {
      throw new InternalServerErrorException(e);
    }
  }
}
