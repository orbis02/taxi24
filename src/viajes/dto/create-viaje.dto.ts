import { ApiProperty } from "@nestjs/swagger";

export class CreateViajeDto {

    id?:number;
    @ApiProperty()
    lat_partida:string;
    @ApiProperty()
    lon_partida:string;
    @ApiProperty()
    lat_destino:string;
    @ApiProperty()
    lon_destino:string;
    @ApiProperty()
    pasajeroid:number;
    estado_carrera?:boolean;
   
}
