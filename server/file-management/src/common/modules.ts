import { ConfigModule, ConfigService } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import configs from '@common/config';

export const MyConfigModule = ConfigModule.forRoot({
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
  }),
});
