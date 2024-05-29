import { Body } from '@nestjs/common';
import { IFile } from './io/models/file.entity';
import FileDto from './validations';

export default class FileController {
  constructor(private fileService: any) {}

  async getAllFiles(): Promise<IFile[]> {
    return this.fileService.getAllFiles();
  }

  async uploadFile(@Body() fileDto: FileDto): Promise<FileDto> {
    return fileDto;
  }
}
