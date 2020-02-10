import { Module } from '@nestjs/common';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';

const defaultMongoConfig: TypeOrmModuleOptions = {
    type: 'mongodb',
    port: Number(process.env.MONGO_PORT),
    useNewUrlParser: true,
    useUnifiedTopology: true,
    entities: ['src/models/mongodb/*.ts'],
    logging: true,
};

const defaultMysqlConfig: TypeOrmModuleOptions = {
    type: 'mysql',
    port: Number(process.env.MYSQL_INTRANET_PORT),
    logging: true,
    multipleStatements: true,
    acquireTimeout: 30000,
    bigNumberStrings: false,
    entities: ['src/models/mysql/**/*.ts'],
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
        TypeOrmModule.forRoot({
            ...defaultMysqlConfig,
            host: process.env.MYSQL_INTRANET_HOST,
            username: process.env.MYSQL_INTRANET_USER,
            password: process.env.MYSQL_INTRANET_PWD,
            database: 'fiscal',
            extra: {
                connectionLimit: 5,
                waitForConnections: true,
            },
            name: 'intranet',
        }),
    ],
    exports: [TypeOrmModule],
})
export class DatabaseModule {}
