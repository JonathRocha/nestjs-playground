import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

type User = {
    name: string;
    email: string;
};

@Injectable()
export class UserService {
    private readonly users: User[];

    private readonly prisma: PrismaClient;

    constructor() {
        this.prisma = new PrismaClient();
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
        const notas = await this.prisma.notaFiscal.findMany({ where: {} });
        return notas;

        // this.sequelize.getRepository(FiscalNotaFiscal).create();
        // return this.sequelize.getRepository(FiscalNotaFiscal).findAll({
        //     where: {
        //         id: 7,
        //     },
        // });
        // return this.nfModel.findAll({
        //     attributes: ['id'],
        //     where: {
        //         id: 7,
        //     },
        // });
        // return this.conn
        //     .getRepository(FiscalNotaFiscal)
        //     .createQueryBuilder('nf')
        //     .innerJoinAndSelect(
        //         'nf.nota_fiscal',
        //         'nfAS',
        //         'nfAS.deleted_at IS NULL AND nfAS.modelo = :modelo',
        //         { modelo: 55 },
        //     )
        //     .where('nf.id = :id', { id: 7 })
        //     .limit(1)
        //     .orderBy('nf.id', 'ASC')
        //     .getMany();
    }
}
