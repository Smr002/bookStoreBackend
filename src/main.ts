import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Enable CORS
  app.enableCors({
    origin: 'https://book-store-front-end-one.vercel.app', // Adjust this based on your front-end origin
    methods: 'GET,POST,PUT,DELETE',
    credentials: true
  });

  // Use the port provided by the environment variable or default to 3000
  const port = process.env.PORT || 3000;
  await app.listen(port);
  console.log(`Application is running on: ${await app.getUrl()}`);
}

bootstrap();
