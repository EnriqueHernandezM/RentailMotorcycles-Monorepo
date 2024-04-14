import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { HttpExceptionFilter } from './http-exception.filter';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { ConfigService } from '@nestjs/config';
async function bootstrap() {
  const configService = new ConfigService();
  const app = await NestFactory.create(AppModule, { cors: true });
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
  const corsOptions = {
    origin: 'http://rentail-motorcycles.s3-website-us-east-1.amazonaws.com',
    access: true,
    credentials: false,
    //optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
  };
  app.enableCors(corsOptions);
  await app.listen(configService.get<string>('HOST'));
}
bootstrap();
