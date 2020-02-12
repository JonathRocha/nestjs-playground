import { Injectable } from '@nestjs/common';
import { InjectConnection } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { FiscalNotaFiscal } from '@models/mysql/FiscalNotaFiscal';

type User = {
    name: string;
    email: string;
};

@Injectable()
export class UserService {
    private readonly users: User[];

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
        // return this.connection.getRepository(DomPedroPessoa).find({
        //     take: 100,
        // });
    }

    async getNotas(): Promise<any> {
        return this.connection.getRepository(FiscalNotaFiscal).find({
            relations: ['nota_fiscal'],
            take: 1,
            order: {
                id: 'ASC',
            },
        });
    }
}
