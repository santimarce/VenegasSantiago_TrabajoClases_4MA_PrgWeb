import { Injectable } from '@nestjs/common';
import { CreateEspecialidadDto } from './dto/create-especialidad.dto';
import { Especialidad } from './entities/especialidad.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class EspecialidadService {
  constructor(
    @InjectRepository(Especialidad)
    private readonly EspecialidadRepository: Repository<Especialidad>) { }
  
  async create(createEspecialidad: CreateEspecialidadDto) {
    const teacher = this.EspecialidadRepository.create(createEspecialidad);
    await this.EspecialidadRepository.save(teacher);
    return teacher;
  }

  async findAll() {
    return this.EspecialidadRepository.find();
  }

  async findOne(id: number) {
    const especialidad = await this.EspecialidadRepository.findOne({ where: { id } });
    return especialidad;
  }

  async delete(id: number) {
    let albums = await this.findOne(id);
    if (albums) {
      const album = this.EspecialidadRepository.delete({ id });
      return "OK";
    } else {
      return "No existe el docente";
    }
  }
}
