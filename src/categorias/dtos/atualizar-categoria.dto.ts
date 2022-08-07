import { ArrayMinSize, IsArray, isNotEmpty, IsNotEmpty, IsOptional, isString, IsString } from "class-validator";
import { Evento } from "../interfaces/categoria.interface";

export class AtualizarCategoriaDto {

    @IsString()
    @IsOptional()
    descricao: string

    @IsArray()
    @ArrayMinSize(1)
    eventos: Array<Evento>
}