import { PartialType } from '@nestjs/mapped-types';
import { CreateTeacherDto } from './create-teacher.dto';
import { IsNotEmpty, IsNumber } from 'class-validator';

export class UpdateTeacherDto extends PartialType(CreateTeacherDto) {
    @IsNumber()
    @IsNotEmpty()
    readonly cedula: number;
} 
