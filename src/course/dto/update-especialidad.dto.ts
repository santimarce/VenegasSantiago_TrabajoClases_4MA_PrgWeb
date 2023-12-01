import { PartialType } from '@nestjs/mapped-types';
import { CreateEspecialidadDto } from './create-especialidad.dto';

export class UpdateCourseDto extends PartialType(CreateEspecialidadDto) { }
