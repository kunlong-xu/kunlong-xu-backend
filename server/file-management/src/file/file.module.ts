import { Module } from '@nestjs/common';

import IoModule from './io/io.module';
import FileService from './file.service';
import FileController from './file.controller';

@Module({
  imports: [IoModule],
  providers: [FileService],
  controllers: [FileController],
})
export default class FileModule {}
