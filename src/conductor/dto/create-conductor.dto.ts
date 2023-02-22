import { ApiProperty } from '@nestjs/swagger';
export class CreateConductorDto {
    id?:number;
    @ApiProperty()
    identificacion:string;
    @ApiProperty()
    nombre:string; 
    @ApiProperty()
    telefono:string;
    @ApiProperty()
    correo:string;
    @ApiProperty()
    lat:string;
    @ApiProperty()
    lon:string;
    
    status?:boolean;

}
