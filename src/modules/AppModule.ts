import { Module } from '@nestjs/common';
import { RouterModule } from 'nest-router';
import { AppController } from './AppController';
import { AppService } from './AppService';
import { UserModule } from './user/UserModule';
import { ConfigModule } from './ConfigModule';
import { routes } from '../routes';

@Module({
    imports: [RouterModule.forRoutes(routes), ConfigModule, UserModule],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
