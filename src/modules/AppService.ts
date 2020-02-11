import { Injectable } from '@nestjs/common';
import { InjectConnection } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { Empresa } from '@models/mongodb/Empresa';

type Hello = {
    hello: string;
};

@Injectable()
export class AppService {
    constructor(
        @InjectConnection('fiscalConnection')
        private readonly connection: Connection,
    ) {}

    getHello(): Hello {
        return { hello: 'world' };
    }

    async getEmpresas(): Promise<Empresa[]> {
        return this.connection.getMongoRepository(Empresa).find({
            select: ['codDpnet'],
        });
    }
}
