import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Habilitar CORS para permitir solicitudes desde el frontend que corre en localhost:3000
  app.enableCors({
    origin: 'http://localhost:3000',  // URL del frontend
    credentials: true,  // Permite enviar cookies si es necesario
  });

  // Cambiar el puerto del servidor a 3001
  await app.listen(3001);
}

bootstrap();
