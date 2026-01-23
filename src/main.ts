import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

// pull necessary - bootstrap

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe({
    // auto clear if no column name on DTO
    whitelist:true,

    // show error message if no field name are entered
    forbidNonWhitelisted:true,

    // accept as DTO .
    transform:true,

  }))
  await app.listen(process.env.PORT ?? 9898);
}
bootstrap();
