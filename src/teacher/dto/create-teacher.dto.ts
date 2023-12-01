import { IsDate, IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";

export class CreateTeacherDto {
    @IsNumber()
    @IsNotEmpty()
    cedula: number;

    @IsString()
    @IsNotEmpty()
    nombre_completo: string;

    @IsDate()
    @IsNotEmpty()
    fecha_nacimiento: Date;

    @IsString()
    @IsNotEmpty()
    especialidad: string;

    @IsString()
    @IsNotEmpty()
    mail: string;

    @IsString()
    @IsOptional()
    contacto: string;

    @IsString()
    @IsNotEmpty()
    password: string;
}
