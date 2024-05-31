import { Table, Column, Model } from 'sequelize-typescript';
import {
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
  DataTypes,
} from 'sequelize';

export type IFile = {
  id: number;
  file_name: string;
  original_file_name: string;
  file_path: string;
  file_size: number;
  file_type: string;
  is_deleted: string;
  download_count: string;
  datetime_created: string;
  datetime_update: string;
};

@Table({ tableName: 'tb_files_practice', modelName: 'tbFiles' })
export default class File extends Model<
  InferAttributes<File>,
  InferCreationAttributes<File>
> {
  @Column({ type: DataTypes.NUMBER, primaryKey: true })
  id: CreationOptional<number>;
  @Column({ type: DataTypes.STRING })
  file_name: string;
  @Column({})
  original_file_name: string;
  file_path: string;
  file_size: number;
  file_type: string;
  is_deleted: string;
  download_count: string;
  @Column({ field: 'datetime_created' })
  createdAt: string;
  @Column({ field: 'datetime_updated' })
  updatedAt: string;
}
