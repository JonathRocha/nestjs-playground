import { Document } from 'mongoose';

export type CertFile = {
    cert: string;
    ca: Array<string>;
    key: string;
};

export type CertValidity = {
    start: number;
    end: number;
};

export type Certificado = {
    cnpj: string;
    file: CertFile;
    pwd: string;
    validity: CertValidity;
};

export interface IEmpresa extends Document {
    _id: number;
    codDpnet: string;
    nomeEmpresa: string;
    nomeSecundario: string;
    cnpjPrincipal: string;
    estado: string;
    certificados: Array<Certificado>;
    ativo: number;
    tipoNF: string;
    tipo: string;
    createdAt: Date;
}
