import { id } from 'cls-rtracer';
import randomString from 'randomstring';

export const generateTraceId = (): string => id() as string;

export function generateRandomString(
  capitalization?: 'lowercase' | 'uppercase',
  charset = 'alphabetic',
  length = 6,
): string {
  return randomString.generate({
    length,
    charset,
    capitalization,
  });
}
