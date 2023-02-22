import { ApiProperty } from "@nestjs/swagger";

export class CreatePasajeroDto {
   
    id?:number;
    @ApiProperty()
    nombre:string;
    @ApiProperty()
    telefonon:string;
    @ApiProperty()
    correo:string
    status?:boolean;
}
