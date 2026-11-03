import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './../app.module.js';
import { TransformResponseInterceptor } from './../interceptor/transform-response/transform-response.interceptor.js';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Mengaktifkan validation pipe global untuk semua request
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // Menghapus properti yang tidak ada di DTO
      forbidNonWhitelisted: true, // Menolak request dengan properti yang tidak ada di DTO
      transform: true, // Mengubah payload menjadi instance DTO
      transformOptions: {
        enableImplicitConversion: true, // Mengaktifkan konversi tipe implisit
      },
    }));

    app.useGlobalInterceptors(new TransformResponseInterceptor());

  await app.listen(process.env.PORT ?? 3000);
}
await bootstrap();