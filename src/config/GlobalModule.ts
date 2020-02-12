import { Module, Global, HttpModule } from '@nestjs/common';
import { join } from 'path';
import { MulterModule } from '@nestjs/platform-express';
import { DatabaseModule } from './DatabaseModule';

@Global()
@Module({
    imports: [
        MulterModule.register({ dest: join(__dirname, '../tmp/uploads') }),
        DatabaseModule,
        HttpModule.register({
            timeout: 7000,
        }),
    ],
    exports: [MulterModule, DatabaseModule, HttpModule],
})
export class GlobalModule {}
