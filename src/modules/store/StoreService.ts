import { Injectable } from '@nestjs/common';
import { DomPedroTitulo } from '@models/mysql/DomPedroTitulo';
import { InjectConnection } from '@nestjs/typeorm';
import { Connection } from 'typeorm';

@Injectable()
export default class StoreService {
    constructor() // @InjectConnection('intranet') private readonly conn: Connection,
    {
        // DomPedroTitulo.useConnection(conn);
    }

    getProducts() {
        // return DomPedroTitulo.getTituloById(55866730781);
    }
}
