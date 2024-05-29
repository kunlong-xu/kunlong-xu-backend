import { Inject, Injectable } from '@nestjs/common';

import { IFile } from './models/file.entity';
import File from './models/file.entity';

@Injectable()
export default class IoService {
  constructor(@Inject('FileRepository') private fileRepository: typeof File) {}

  async getAllFiles(): Promise<IFile[]> {
    return this.fileRepository.findAll();
  }
}
