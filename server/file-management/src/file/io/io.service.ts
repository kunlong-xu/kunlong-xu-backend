import { Inject, Injectable } from '@nestjs/common';

import File from './models/file.entity';

@Injectable()
export default class IoService {
  constructor(@Inject('FileRepository') private fileRepository: typeof File) {}

  async getAllFiles(): Promise<File[]> {
    return this.fileRepository.findAll();
  }
}
