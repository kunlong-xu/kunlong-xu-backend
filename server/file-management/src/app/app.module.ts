import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MyConfigModule, MySequelizeModule } from '@app/common/modules';
import FileModule from '@app/file/file.module';

@Module({
  imports: [MyConfigModule, MySequelizeModule, FileModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
