import { IsString, IsBoolean, IsNumber, IsNotEmpty } from 'class-validator';

export default class FileDto {
  @IsNumber()
  id: number;

  @IsString()
  fileName: string;

  @IsString()
  @IsNotEmpty()
  originFileName: string;

  @IsString()
  @IsNotEmpty()
  filePath: string;

  @IsString()
  @IsNotEmpty()
  fileType: string;

  @IsString()
  @IsNotEmpty()
  fileSize: string;

  @IsBoolean()
  isDeleted: boolean;

  @IsNumber()
  downloadCount: number;
}
