// main.ts
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Enable CORS
  app.enableCors({
    origin: 'http://localhost:3001', // Specify the React app's origin
    methods: 'GET,POST,PUT,DELETE',  // Define allowed HTTP methods
    credentials: true                // If you need to allow credentials
  });

  await app.listen(3000);  // NestJS running on port 3000
}
bootstrap();
