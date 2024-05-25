/* eslint-disable @typescript-eslint/no-var-requires */
import { Environments } from '../constants';
import { GenericObject } from '../types';

import AppCenterConfig from './appcenter/config.prod';

require('dotenv').config();

const config = {
  ENV: process.env.ENVIRONMENT || Environments.BETA,
  PORT: process.env.PORT || 8080,
  db: {
    auth: {
      DB_HOST: process.env.DB_HOST,
      DB_USER_NAME: process.env.DB_USER_NAME,
      DB_PASSWORD: process.env.DB_PASSWORD,
      DB_NAME: process.env.DB_NAME,
      DB_PORT: process.env.DB_PORT,
    },
    options: {
      pool: {
        DB_MAX_POOL: process.env.DB_MAX_POOL || 250,
        POOL_IDLE_TIME: process.env.POOL_IDLE_TIME || 5000,
        POOL_ENABLED: process.env.POOL_ENABLED || true,
      },
    },
  },
  CONSOLE_LOG_ENABLED: true,
  REQUEST_KEYS_TO_LOG: process.env.REQUEST_KEYS_TO_LOG || [
    'method',
    'originalUrl',
    'params',
    'httpVersion',
    'headers',
    'url',
    'statusCode',
    'hostname',
    'baseUrl',
    'query',
    'body',
  ],
};

export default (): GenericObject => ({ ...config, ...AppCenterConfig });
