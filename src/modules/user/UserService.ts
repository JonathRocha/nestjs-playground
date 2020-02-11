import { Injectable } from '@nestjs/common';
import { InjectConnection } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
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
        // return this.connection.getRepository(FiscalNotaFiscal).find({
        //     relations: ['nota_fiscal'],
        //     take: 1,
        //     order: {
        //         id: 'ASC',
        //     },
        // });
        // return this.connection.get
        //     .getRepository(DomPedroNotaFiscal).
        // .findOne(58993035, {
        //     relations: ['nota_fiscal_sefaz'],
        // });
        return this.connection.getRepository(FiscalNotaFiscal).find({
            relations: ['nota_fiscal'],
            take: 1,
            order: {
                id: 'ASC',
            },
        });
    }
}
