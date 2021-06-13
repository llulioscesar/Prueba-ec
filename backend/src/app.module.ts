import { Module } from '@nestjs/common';
import { ConfigModule } from './config/config.module';
import { DatabaseModule } from './database/database.module';
import { RutaModule } from './modulos/ruta/ruta.module';

@Module({
  imports: [ConfigModule, DatabaseModule, RutaModule],
})
export class AppModule {}
