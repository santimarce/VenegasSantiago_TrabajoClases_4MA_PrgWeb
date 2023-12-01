import { Teacher } from 'src/teacher/entities/teacher.entity';
import { PrimaryGeneratedColumn, Entity, Column, OneToMany, ManyToOne } from 'typeorm';

@Entity('especialidad',{ schema: 'public'})
export class Especialidad {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column('varchar', {
        name: 'name_especialidad',
        nullable: false
    })
    name_especialidad: string;
    @OneToMany(() => Teacher, (teacher) => teacher.especialidad)
    teachers: Teacher[];
}