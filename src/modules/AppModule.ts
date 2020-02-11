import { Module } from '@nestjs/common';
import { RouterModule } from 'nest-router';
import { AppController } from './AppController';
import { AppService } from './AppService';
import { UserModule } from './user/UserModule';
import { ConfigModule } from '../config/ConfigModule';
import { routes } from '../routes';
import StoreModule from './store/StoreModule';

@Module({
    imports: [
        RouterModule.forRoutes(routes),
        ConfigModule,
        UserModule,
        StoreModule,
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
