import { NestFactory } from '@nestjs/core';
import { Logger } from '@nestjs/common';
import * as dotenv from 'dotenv';
import { AppModule } from './modules/AppModule';

async function bootstrap() {
    dotenv.config();
    const app = await NestFactory.create(AppModule);
    await app.listen(process.env.PORT || 3001, () => {
        Logger.log(
            `Server is running on port ${process.env.PORT || 3001}! [gr:ready]`,
        );
    });
}

bootstrap();
