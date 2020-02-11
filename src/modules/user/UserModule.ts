import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DomPedroPessoa } from '@models/mysql/DomPedroPessoa';
import { FiscalNotaFiscal } from '@models/mysql/FiscalNotaFiscal';
import { DomPedroNotaFiscal } from '@models/mysql/DomPedroNotaFiscal';
import { UserController } from './UserController';
import { UserService } from './UserService';

@Module({
    imports: [
        TypeOrmModule.forFeature(
            [DomPedroPessoa, DomPedroNotaFiscal, FiscalNotaFiscal],
            'intranet',
        ),
    ],
    controllers: [UserController],
    providers: [UserService],
})
export class UserModule {}
