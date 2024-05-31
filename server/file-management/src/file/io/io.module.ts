import { Module } from '@nestjs/common';
import IoService from './io.service';
import FileProvider from './models/file.provider';

@Module({
  providers: [IoService, FileProvider],
  exports: [IoService],
})
export default class IoModule {}
