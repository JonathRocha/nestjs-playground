import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { FiscalNotaFiscal } from '@models/mysql/FiscalNotaFiscal';
import { UserController } from './UserController';
import { UserService } from './UserService';

@Module({
    imports: [SequelizeModule.forFeature([FiscalNotaFiscal])],
    controllers: [UserController],
    providers: [UserService],
})
export class UserModule {}
