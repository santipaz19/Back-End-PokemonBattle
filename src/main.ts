import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Habilitar CORS para permitir solicitudes desde cualquier origen
  app.enableCors({
    origin: true,  // Permite solicitudes desde cualquier origen
    credentials: true,
  });

  const port = 3001
  await app.listen(port);
  console.log(`Application is running on: ${await app.getUrl()}`);
}

bootstrap();
