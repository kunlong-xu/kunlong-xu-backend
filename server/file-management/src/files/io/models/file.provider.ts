import { Provider } from '@nestjs/common';
import File from './file.entity';

export default {
  provide: 'FileRepository',
  useValue: File,
} satisfies Provider;
