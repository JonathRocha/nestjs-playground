import { Injectable } from '@nestjs/common';
import { InjectConnection, InjectRepository } from '@nestjs/typeorm';
import { DomPedroPessoa } from '@models/mysql/DomPedroPessoa';
import { Connection, Repository } from 'typeorm';
import { FiscalNotaFiscal } from '@models/mysql/FiscalNotaFiscal';
import { DomPedroNotaFiscal } from '@models/mysql/DomPedroNotaFiscal';

type User = {
    name: string;
    email: string;
};

@Injectable()
export class UserService {
    private readonly users: Array<User>;

    constructor(
        @InjectConnection('intranet')
        private readonly connection: Connection,
    ) {
        this.users = [
            {
                name: 'Jonathan Rocha',
                email: 'johnferreirar@gmail.com',
            },
        ];
    }

    async getUsers(): Promise<User[]> {
        return this.users;
    }

    async getPessoas(): Promise<any> {
        return [];
        // return this.connection.getRepository(Pessoa).find({
        //     take: 100,
        // });
    }

    async getNotas(): Promise<any> {
        return this.connection.getRepository(FiscalNotaFiscal).find({
            select: ['nota_fiscal_as', 'id'],
            // relations: ['nota_fiscal'],
            take: 1,
            order: {
                id: 'ASC',
            },
        });
    }
}
