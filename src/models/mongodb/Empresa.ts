import { Entity, Column, PrimaryColumn } from 'typeorm';

export class CertFile {
    @Column()
    cert: string;

    @Column()
    ca: string[];

    @Column()
    key: string;
}

export class CertValidity {
    @Column()
    start: number;

    @Column()
    end: number;
}

export class Certificado {
    @Column()
    cnpj: string;

    @Column((type) => CertFile)
    file: CertFile;

    @Column()
    pwd: string;

    @Column((type) => CertValidity)
    validity: CertValidity;
}

@Entity({ name: 'empresas' })
export class Empresa {
    @PrimaryColumn()
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

    // TODO: fix shit
    // @Column((type) => Certificado, { })
    // @Column({ select: false })
    @Column((type) => Certificado)
    certificados: Certificado[];

    @Column()
    ativo: number;

    @Column()
    tipoNF: string;

    @Column()
    tipo: string;

    @Column()
    createdAt: Date;
}
