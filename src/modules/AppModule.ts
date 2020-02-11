import { Module } from '@nestjs/common';
import { RouterModule } from 'nest-router';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Empresa } from '@models/mongodb/Empresa';
import { DomPedroPessoa } from '@models/mysql/DomPedroPessoa';
import { AppController } from './AppController';
import { AppService } from './AppService';
import { UserModule } from './user/UserModule';
import { ConfigModule } from '../config/ConfigModule';
import { routes } from '../routes';

// https://stackoverflow.com/a/57706408
@Module({
    imports: [
        RouterModule.forRoutes(routes),
        ConfigModule,
        UserModule,
        TypeOrmModule.forFeature([Empresa], 'fiscalConnection'),
        TypeOrmModule.forFeature([DomPedroPessoa], 'intranet'),
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
