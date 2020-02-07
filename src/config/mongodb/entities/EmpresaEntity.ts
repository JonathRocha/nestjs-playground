import { Entity, Column } from 'typeorm';

@Entity()
export class Empresa {
    @Column()
    _id: number;

    @Column()
    codDpnet: string;

    @Column()
    nomeEmpresa: string;

    @Column()
    nomeSecundario: string;

    @Column()
    cnpjPrincipal: string;

    @Column()
    estado: string;

    @Column()
    certificados: [
        {
            cnpj: string;
            file: {
                cert: string;
                ca: [];
                key: string;
            };
            pwd: string;
            validity: {
                start: number;
                end: number;
            };
        },
    ];

    @Column()
    ativo: number;

    @Column()
    tipoNF: string;

    @Column()
    tipo: string;

    @Column()
    createdAt: Date;
}
