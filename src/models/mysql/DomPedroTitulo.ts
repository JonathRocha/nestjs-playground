import {
    Entity,
    Column,
    PrimaryColumn,
    CreateDateColumn,
    UpdateDateColumn,
    BaseEntity,
    EntityRepository,
} from 'typeorm';

@Entity({ database: 'dompedro_as', name: 'titulo' })
export class DomPedroTitulo extends BaseEntity {
    @PrimaryColumn()
    id: number;

    @Column()
    emissao: Date;

    @Column()
    valor: number;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

    @Column()
    // TODO: @DeleteDateColumn()
    deleted_at: Date;

    static getTituloById(id: number) {
        return this.find({
            where: { id },
        });
    }
}
