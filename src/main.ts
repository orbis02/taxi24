import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const options = new DocumentBuilder()
    .setTitle(' API Taxi24')
    .setDescription('API Taxi24')
    .setVersion('1.0')
    .addTag('')
    .build();
  
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document);
  
  await app.listen(3000);
}
bootstrap();
