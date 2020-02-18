import {
    Column,
    PrimaryKey,
    Model,
    Table,
    Sequelize,
} from 'sequelize-typescript';
import {
    Instance,
    AbstractDataType,
    ModelAttributeColumnOptions,
    DataType,
} from 'sequelize';

// import { Entity, Column, OneToOne, PrimaryColumn, JoinColumn } from 'typeorm';
// import { DomPedroNotaFiscal } from './DomPedroNotaFiscal';

// @Entity({ database: 'fiscal', name: 'nota_fiscal' })
// export class FiscalNotaFiscal {
//     @PrimaryColumn()
//     id: number;

//     @Column()
//     numero: number;

//     @Column()
//     valor: number;

//     @Column()
//     emitente_cnpj: string;

//     @Column()
//     nota_fiscal_as: number;

//     @OneToOne(() => DomPedroNotaFiscal)
//     @JoinColumn({ name: 'nota_fiscal_as' })
//     nota_fiscal: DomPedroNotaFiscal;
// }

export interface NFAttributes {
    id: number;
    // numero: number;
    // valor: number;
    // emitente_cnpj: string;
    // nota_fiscal_as: number;
}

type NFDefineAttributes = {
    [x in keyof NFAttributes]:
        | string
        | AbstractDataType
        | ModelAttributeColumnOptions;
};

// export const NFAttrs: NFDefineAttributes = {
//     id: number;
// }

export interface NFInstance extends Instance<NFAttributes> {
    get(): NFAttributes;
}

@Table({ tableName: 'nota_fiscal', createdAt: 'created_at', timestamps: false })
export class FiscalNotaFiscal extends Model<FiscalNotaFiscal, NFAttributes> {
    @PrimaryKey
    @Column
    id: number;

    @Column
    numero: number;

    @Column
    valor: number;

    @Column
    emitente_cnpj: string;

    @Column
    nota_fiscal_as: number;
}
