import { Injectable } from '@nestjs/common';
import { CreateTeacherDto } from './dto/create-teacher.dto';
import { UpdateTeacherDto } from './dto/update-teacher.dto';
import { Teacher } from './entities/teacher.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class TeacherService {
  constructor(
    @InjectRepository(Teacher)
    private readonly TeacherRepository: Repository<Teacher>) { }

  async create(createTeacher: CreateTeacherDto) {
    const teacher = this.TeacherRepository.create(createTeacher);
    await this.TeacherRepository.save(teacher);
    return teacher;
  }

  findAll() {
    return this.TeacherRepository.find();
  }

  async findOne(cedula: number) {
    const teacher = await this.TeacherRepository.findOne({ where: { cedula } });
      return teacher;    
  }

  async update(cedula: number, updateTeacher: UpdateTeacherDto) {
    let teacher = await this.findOne(cedula);
    if (!teacher) {
      return "No existe";
    }
    const updateTeacherDtoProperties = Object.keys(updateTeacher);

    for (const property of Object.keys(teacher)) {
     if (updateTeacherDtoProperties.includes(property)) {
        teacher[property] = updateTeacher	[property];
      }
    }
    await this.TeacherRepository.update(cedula, teacher);

    return "OK";
  }


  async delete(cedula: number) {
    let albums = await this.findOne(cedula);
    if (albums) {
      const album = this.TeacherRepository.delete({ cedula });
      return "OK";
    } else {
      return "No existe el docente";
    }
  }
}
