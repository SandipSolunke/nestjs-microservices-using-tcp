import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Transport } from '@nestjs/microservices';

//create microservice
const microserviceOptions = {
  transport: Transport.TCP,
  options: {
    port: 3001
  }
}

async function bootstrap() {
  const app = await NestFactory.createMicroservice(AppModule, microserviceOptions);
  await app.listen();
}

bootstrap();
