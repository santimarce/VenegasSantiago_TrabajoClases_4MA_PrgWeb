import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TeacherService } from './teacher.service';
import { CreateTeacherDto } from './dto/create-teacher.dto';
import { UpdateTeacherDto } from './dto/update-teacher.dto';

@Controller('teacher')
export class TeacherController {
  constructor(private readonly teacherService: TeacherService) {}

  @Post()
  create(@Body() createTeacherDto: CreateTeacherDto) {
    return this.teacherService.create(createTeacherDto);
  }

  @Get()
  findAll() {
    return this.teacherService.findAll();
  }

  @Get(':cedula')
  findOne(@Param('cedula') cedula: number) {
    return this.teacherService.findOne(+cedula);
  }

  @Patch(':cedula')
  update(@Param('cedula') cedula: number, @Body() updateTeacherDto: UpdateTeacherDto) {
    return this.teacherService.update(+cedula, updateTeacherDto);
  }

  @Delete(':cedula')
  remove(@Param('cedula') cedula: string) {
    return this.teacherService.delete(+cedula);
  }
}
