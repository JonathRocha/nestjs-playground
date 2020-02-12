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

    @Column()
    modelo: number;

    @OneToOne(() => FiscalNotaFiscal)
    @JoinColumn({ name: 'id', referencedColumnName: 'nota_fiscal_as' })
    nota_fiscal_sefaz: FiscalNotaFiscal;
}
