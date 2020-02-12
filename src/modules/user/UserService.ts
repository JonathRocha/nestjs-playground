import { Injectable, Logger } from '@nestjs/common';
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

    async getNotas(): Promise<FiscalNotaFiscal[]> {
        return this.connection
            .getRepository(FiscalNotaFiscal)
            .createQueryBuilder('nf')
            .innerJoinAndSelect(
                'nf.nota_fiscal',
                'nfAS',
                'nfAS.deleted_at IS NULL AND nfAS.modelo = :modelo',
                { modelo: 55 },
            )
            .where('nf.id = :id', { id: 7 })
            .limit(1)
            .orderBy('nf.id', 'ASC')
            .printSql()
            .getMany();
    }
}
