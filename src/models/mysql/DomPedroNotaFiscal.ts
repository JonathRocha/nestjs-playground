import { Entity, Column, PrimaryColumn, OneToOne, JoinColumn } from 'typeorm';
import { FiscalNotaFiscal } from './FiscalNotaFiscal';

@Entity({ database: 'dompedro_as', name: 'nota_fiscal' })
export class DomPedroNotaFiscal {
    @PrimaryColumn()
    id: number;

    @Column()
    numero_nota: number;

    @Column()
    valor_nota: number;

    @OneToOne(
        (type) => FiscalNotaFiscal,
        (nf) => nf.nota_fiscal,
    )
    nota_fiscal_as: FiscalNotaFiscal;
}
