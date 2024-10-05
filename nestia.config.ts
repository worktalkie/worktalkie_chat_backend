// nestia configuration file
import type sdk from '@nestia/sdk';
import { NestFactory } from '@nestjs/core';

import { AppModule } from './src/app.module';

const NESTIA_CONFIG: sdk.INestiaConfig = {
  input: () => NestFactory.create(AppModule),
  output: 'src/api',
  swagger: {
    output: 'packages/api/swagger.json',
    security: {
      bearer: {
        type: 'apiKey',
        in: 'header',
        name: 'Authorization',
      },
    },
    beautify: true,
  },
  primitive: false,
  simulate: true,
};
export default NESTIA_CONFIG;
