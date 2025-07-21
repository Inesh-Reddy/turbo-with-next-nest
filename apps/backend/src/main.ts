import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  try {
    const app = await NestFactory.create(AppModule);
    app.enableCors({
      origin: 'http://localhost:3001',
    });
    await app.listen(process.env.PORT ?? 3000, () => {
      console.log(`Server is listening on port : 3000...`);
    });
  } catch (error) {
    console.log(`${error}`);
  }
}
void bootstrap().catch();
