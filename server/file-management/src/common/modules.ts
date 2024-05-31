import { ConfigModule, ConfigService } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import configs from '@common/config';
import models from './models';

export const MyConfigModule = ConfigModule.forRoot({
  isGlobal: true,
  load: [configs],
});

export const MySequelizeModule = SequelizeModule.forRootAsync({
  inject: [ConfigService],
  useFactory: (config: ConfigService) => ({
    dialect: 'mysql',
    host: config.get('db.auth.DB_HOST'),
    port: config.get('db.auth.DB_PORT'),
    database: config.get('db.auth.DB_NAME'),
    username: config.get('db.auth.DB_USER_NAME'),
    password: config.get('db.auth.DB_PASSWORD'),
    models,
  }),
});
