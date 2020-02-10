import 'dotenv/config';
import { NestFactory } from '@nestjs/core';
import { Logger } from '@nestjs/common';
import { AppModule } from './modules/AppModule';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    await app.listen(process.env.PORT || 3001, () => {
        Logger.log(
            `🚀\tServer is running on port ${process.env.PORT ||
                3001}! [gr:ready]`,
            'Bootstrap',
        );
    });
}

bootstrap();
