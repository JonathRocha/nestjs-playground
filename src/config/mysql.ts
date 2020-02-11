import 'dotenv/config';
import { join } from 'path';
import { ConnectionOptions } from 'typeorm';

const config: ConnectionOptions = {
    type: 'mysql',
    logging: false,
    multipleStatements: true,
    acquireTimeout: 30000,
    bigNumberStrings: false,
    entities: [join(__dirname, '../models/mysql/*{.ts,.js}')],
    host: process.env.MYSQL_INTRANET_HOST,
    port: Number(process.env.MYSQL_INTRANET_PORT),
    username: process.env.MYSQL_INTRANET_USER,
    password: process.env.MYSQL_INTRANET_PWD,
    database: 'fiscal',
    extra: {
        connectionLimit: 5,
        waitForConnections: true,
    },
    name: 'intranet',
    synchronize: false,
    migrations: [join(__dirname, '../migrations/*{.ts,.js}')],
    cli: {
        migrationsDir: join(__dirname, '../migrations'),
    },
};

export default config;
