import { Module, Global } from '@nestjs/common';
import { resolve } from 'path';
import { MulterModule } from '@nestjs/platform-express';
import { DatabaseModule } from './DatabaseModule';

@Global()
@Module({
    imports: [
        MulterModule.register({
            dest: resolve(process.cwd(), 'tmp/uploads'),
        }),
        DatabaseModule,
    ],
    exports: [MulterModule, DatabaseModule],
})
export class ConfigModule {}
