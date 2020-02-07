import { Module } from '@nestjs/common';
import { RouterModule } from 'nest-router';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Empresa } from 'src/config/mongodb/entities/EmpresaEntity';
import { AppController } from './AppController';
import { AppService } from './AppService';
import { UserModule } from './user/UserModule';
import { ConfigModule } from '../config/ConfigModule';
import { routes } from '../routes';

@Module({
    imports: [
        RouterModule.forRoutes(routes),
        ConfigModule,
        UserModule,
        TypeOrmModule.forFeature([Empresa]),
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
