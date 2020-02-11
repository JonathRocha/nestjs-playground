import { Entity, Column, OneToOne, PrimaryColumn, JoinColumn } from 'typeorm';
import { DomPedroNotaFiscal } from './DomPedroNotaFiscal';

@Entity({ database: 'fiscal', name: 'nota_fiscal' })
export class FiscalNotaFiscal {
    @PrimaryColumn()
    id: number;

    @Column()
    numero: number;

    @Column()
    valor: number;

    @Column()
    nota_fiscal_as: number;

    @OneToOne((type) => DomPedroNotaFiscal)
    @JoinColumn({ name: 'nota_fiscal_as' })
    nota_fiscal: DomPedroNotaFiscal;
}
