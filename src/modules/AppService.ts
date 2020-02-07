import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MongoRepository } from 'typeorm';
import { Empresa } from 'src/config/mongodb/entities/EmpresaEntity';

type Hello = {
    hello: string;
};

@Injectable()
export class AppService {
    constructor(
        @InjectRepository(Empresa)
        private readonly empresaRepo: MongoRepository<Empresa>,
    ) {}

    getHello(): Hello {
        return { hello: 'world' };
    }

    async getEmpresas(): Promise<Array<Empresa>> {
        return this.empresaRepo.find({});
    }
}
