import { Module, Global } from '@nestjs/common';
import { join } from 'path';
import { MulterModule } from '@nestjs/platform-express';
import { DatabaseModule } from './DatabaseModule';

@Global()
@Module({
    imports: [
        MulterModule.register({
            dest: join(__dirname, '../tmp/uploads'),
        }),
        DatabaseModule,
    ],
    exports: [MulterModule, DatabaseModule],
})
export class ConfigModule {}
