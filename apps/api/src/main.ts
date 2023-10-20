import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  //app.setGlobalPrefix("/pij")
 await app.listen(8082);
}
bootstrap();
