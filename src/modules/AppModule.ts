import { Module, HttpModule } from '@nestjs/common';
import { RouterModule } from 'nest-router';
import { AppController } from './AppController';
import { AppService } from './AppService';
import { UserModule } from './user/UserModule';
import { GlobalModule } from '../config/GlobalModule';
import { routes } from '../routes';
import StoreModule from './store/StoreModule';
import { AuthModule } from './auth/AuthModule';

@Module({
    imports: [
        RouterModule.forRoutes(routes),
        GlobalModule,
        AuthModule,
        UserModule,
        StoreModule,
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
