import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { HttpExceptionFilter } from './http-exception.filter';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  //app.setGlobalPrefix("/pij")
  const config = new DocumentBuilder()
    .setTitle('Rentail Motorcycles ')
    .setDescription(
      'This is a store of rentail motorcycles. Int this moment in  api only we can look  motorcycles, cretate, modified and delete.',
    )
    .setVersion('0.5.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  app.useGlobalFilters(new HttpExceptionFilter());
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(8082);
}
bootstrap();
