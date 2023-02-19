import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as process from 'process';

async function start() {
  const PORT = process.env.PORT || 5000;
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    credentials: true,
    origin: process.env.CLIENT_URL || 'http://localhost:3000',
  });
  await app.listen(PORT, () => {
    console.log(`Server start on ${PORT}`);
  });
}
start();
