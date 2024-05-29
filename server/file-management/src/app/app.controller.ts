import { Controller, Get, Post, Res, UploadedFile } from '@nestjs/common';
import { AppService } from './app.service';
import { Response } from 'express';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('pipeline')
  getPipeline(@Res() res: Response) {
    return res.status(200).json({ message: 'Pipeline is working' });
  }

  @Get('cd')
  getCD(@Res() res: Response) {
    return res.status(200).json({ message: 'CD is working or not' });
  }

  @Post('upload')
  upload(@UploadedFile() file) {
    return file;
  }
}
