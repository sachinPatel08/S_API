import { NestFactory, NestApplication } from '@nestjs/core';
import * as dotenv from 'dotenv';
dotenv.config();
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { logger: ['log', 'warn'] });
  app.setGlobalPrefix('v1');
  await app.listen(process.env.PORT);
}
bootstrap();
