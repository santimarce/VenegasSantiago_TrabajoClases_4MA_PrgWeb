import { Especialidad } from "src/course/entities/especialidad.entity";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, ManyToOne, OneToMany, PrimaryColumn, UpdateDateColumn } from "typeorm";
@Entity('teacher', { schema: 'public' })
export class Teacher {
    @PrimaryColumn()
    cedula: number;
    @CreateDateColumn({
        name: 'create_at',
        type: 'timestamp',
        default: () => 'CURRENT_TIMESTAMP'
    })
    create_at: Date;
    @UpdateDateColumn({
        name: 'update_at',
        type: 'timestamp',
        default: () => 'CURRENT_TIMESTAMP'
    })
    update_at: Date;
    @DeleteDateColumn({
        name: 'delete_at',
        type: 'timestamp',
        nullable: true,
    })
    deleteAt: Date;
    @Column('varchar', {
        name: 'nombre_completo',
        nullable: false,
    })
    nombre_completo: string;
    @Column('date', {
        name: 'fecha_nacimiento',
        nullable: false,
    })
    fecha_nacimiento: Date;
    @Column('varchar', {
        name: 'mail',
        nullable: false,
    })
    mail: string;
    @Column('varchar', {
        name: 'contacto',
        nullable: true,
    })
    contacto: string;
    @Column('varchar', {
        name: 'password',
        nullable: false,
    })
    password: string;
    @ManyToOne(() => Especialidad, (especialidad) => especialidad.teachers)
    especialidad: Especialidad;
}
