
import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module.js';
import { TransformResponseInterceptor } from './interceptor/transform-response/transform-response.interceptor.js';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Validation untuk semua request
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
      transformOptions: {
        enableImplicitConversion: true,
      },
    }),
  );

  // Mengubah format response API secara global
  app.useGlobalInterceptors(
    new TransformResponseInterceptor(),
  );

  await app.listen(process.env.PORT ?? 3000);
}

bootstrap();
