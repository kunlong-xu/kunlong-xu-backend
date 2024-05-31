import {
  Controller,
  Get,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import FileService from './file.service';
import File from './io/models/file.entity';
// import FileDto from './validations';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('file')
export default class FileController {
  constructor(private fileService: FileService) {}

  @Get()
  async getHello(): Promise<string> {
    return 'Hello World!\n';
  }

  @Get('all')
  async getAllFiles(): Promise<File[]> {
    return this.fileService.getAllFiles();
  }

  @Post('upload')
  @UseInterceptors(FileInterceptor('file'))
  async upload(@UploadedFile() file: Express.Multer.File) {
    console.log(file);
  }
}
