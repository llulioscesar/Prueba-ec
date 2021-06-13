import { TypeOrmModule } from '@nestjs/typeorm';
import { ConnectionOptions } from 'typeorm';
import { ConfigService } from '../config/config.service';
import { Configuracion } from '../config/config.keys';
import { ConfigModule } from '../config/config.module';

console.log(process.env);

export const databaseProviders = [
  TypeOrmModule.forRootAsync({
    imports: [ConfigModule],
    inject: [ConfigService],
    async useFactory(config: ConfigService) {
      return {
        type: 'postgres',
        host: config.get(Configuracion.DB_HOST),
        port: config.get(Configuracion.DB_PUERTO) || 5432,
        username: config.get(Configuracion.DB_USUARIO),
        password: config.get(Configuracion.DB_CONTRASEÑA),
        database: config.get(Configuracion.DB_NOMBRE),
        synchronize: false,
        logging: true,
        entities: [__dirname + '/../**/*.entity{.ts,.js}'],
        migrations: [__dirname + '/migrations/*{.ts,.js}'],
      } as ConnectionOptions;
    },
  }),
];
