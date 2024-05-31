import { NestFactory } from '@nestjs/core';
import { AppModule } from '@app/app/app.module';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const configService = app.get(ConfigService);

  console.log(configService.get('db.auth'));

  await app.listen(3001, '0.0.0.0');
}
bootstrap();
