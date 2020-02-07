import { Module, Global } from '@nestjs/common';
import { MulterModule } from '@nestjs/platform-express';

@Global()
@Module({
    imports: [
        MulterModule.register({
            dest: 'tmp/uploads',
        }),
    ],
    exports: [MulterModule],
})
export class ConfigModule {}
