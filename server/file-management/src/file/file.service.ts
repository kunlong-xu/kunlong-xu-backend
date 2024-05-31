import { Injectable } from '@nestjs/common';

import IoService from './io/io.service';
import File from './io/models/file.entity';

@Injectable()
export default class FileService {
  constructor(private ioService: IoService) {}
  async getAllFiles(): Promise<File[]> {
    return this.ioService.getAllFiles();
  }
}
