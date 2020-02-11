import 'dotenv/config';
import { join } from 'path';
import { ConnectionOptions } from 'typeorm';

const config: ConnectionOptions = {
    type: 'mysql',
    logging: true,
    multipleStatements: true,
    acquireTimeout: 30000,
    bigNumberStrings: false,
    entities: [join(__dirname, 'src/models/mysql/**/*.ts')],
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
    migrations: [join(__dirname, 'src/migration/*.ts')],
    cli: {
        migrationsDir: join(__dirname, 'src/migrations'),
    },
};

export default config;
