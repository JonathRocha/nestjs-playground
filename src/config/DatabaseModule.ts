import 'dotenv/config';
import { join } from 'path';
import { Module } from '@nestjs/common';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { SequelizeModule } from '@nestjs/sequelize';
import mysqlConfig from './mysql';

const defaultMongoConfig: TypeOrmModuleOptions = {
    type: 'mongodb',
    port: Number(process.env.MONGO_PORT),
    useNewUrlParser: true,
    useUnifiedTopology: true,
    entities: [join(__dirname, '../models/mongodb/*.ts')],
    logging: true,
};

@Module({
    imports: [
        TypeOrmModule.forRoot({
            ...defaultMongoConfig,
            host: process.env.MONGO_HOST,
            username: process.env.MONGO_USER,
            password: process.env.MONGO_USER_PWD,
            authSource: 'admin',
            database: 'fiscal',
            name: 'fiscalConnection',
        }),
        SequelizeModule.forRoot(mysqlConfig),
    ],
    exports: [TypeOrmModule, SequelizeModule],
})
export class DatabaseModule {}
