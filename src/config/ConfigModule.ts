import { join } from 'path';
import { Module, Global } from '@nestjs/common';
import { MulterModule } from '@nestjs/platform-express';
import { TypeOrmModule } from '@nestjs/typeorm';

@Global()
@Module({
    imports: [
        MulterModule.register({
            dest: 'tmp/uploads',
        }),
        TypeOrmModule.forRoot({
            type: 'mongodb',
            host: process.env.MONGO_HOST,
            port: Number(process.env.MONGO_PORT),
            database: 'fiscal',
            username: process.env.MONGO_USER,
            password: process.env.MONGO_USER_PWD,
            authSource: 'admin',
            poolSize: 5,
            useNewUrlParser: true,
            useUnifiedTopology: true,
            entities: [join(__dirname, 'config/mongodb/**/**Entity.ts')],
            logging: true,
        }),
    ],
    exports: [MulterModule, TypeOrmModule],
})
export class ConfigModule {}
