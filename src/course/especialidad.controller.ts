import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EspecialidadService } from './especialidad.service';
import { CreateEspecialidadDto } from './dto/create-especialidad.dto';

@Controller('especialidad')
export class EspecialidadController {
  constructor(private readonly especialidadService: EspecialidadService) { }

  @Post()
  create(@Body() createEspecialidadDto: CreateEspecialidadDto) {
    return this.especialidadService.create(createEspecialidadDto);
  }

  @Get()
  findAll() {
    return this.especialidadService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.especialidadService.findOne(+id);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.especialidadService.delete(+id);
  }
}
