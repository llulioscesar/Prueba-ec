import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { RutaService } from './ruta.service';
import { Ruta } from './ruta.entity';

@Controller()
export class RutaController {
  constructor(private readonly appService: RutaService) {}

  @Get('')
  getAll() {
    return this.appService.getAll();
  }

  @Post('')
  crear(@Body() ruta: Ruta) {
    return this.appService.create(ruta);
  }

  @Delete(':id')
  eliminar(@Param('id') id: string) {
    return this.appService.delete(id);
  }

  @Get('padres/:id')
  getPadres(@Param('id') id: string) {
    return this.appService.getPadresFromRutaID(id);
  }

  @Get('hijos/:id')
  getHijos(@Param('id') id: string) {
    return this.appService.getHijosFromRutaID(id);
  }
}
