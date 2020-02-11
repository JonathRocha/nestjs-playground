import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ database: 'dompedro_as', name: 'pessoa' })
export class DomPedroPessoa {
    @PrimaryColumn()
    id: number;

    @Column()
    nome: string;

    @Column()
    nome_red: string;

    @Column()
    deleted_at: Date;
}
