import { Injectable } from '@nestjs/common';
import { InjectRepository, InjectConnection } from '@nestjs/typeorm';
import { MongoRepository, Connection } from 'typeorm';
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
