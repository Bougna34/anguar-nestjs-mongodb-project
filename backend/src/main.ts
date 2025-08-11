import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);

    // Config du CORS pour Angular
    app.enableCors({
        origin: 'https://localhost:4200',
        credentials: true
    });

    await app.listen(process.env.PORT || 3000);
}
bootstrap();
