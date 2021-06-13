import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Ruta } from './ruta.entity';
import { RutaController } from './ruta.controller';
import { RutaService } from './ruta.service';
import { ConfigService } from '../../config/config.service';

@Module({
  imports: [TypeOrmModule.forFeature([Ruta])],
  controllers: [RutaController],
  providers: [RutaService, ConfigService],
})
export class RutaModule {}
