import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PasajeroService } from './pasajero.service';
import { CreatePasajeroDto } from './dto/create-pasajero.dto';

import { ApiTags } from '@nestjs/swagger';
@ApiTags('Control de Pasajero')
@Controller('pasajero')
export class PasajeroController {
  constructor(private readonly pasajeroService: PasajeroService) {}

  @Post()
  create(@Body() createPasajeroDto: CreatePasajeroDto) {
    return this.pasajeroService.create(createPasajeroDto);
  }

  @Get('pasajeros')
  findAll() {
    return this.pasajeroService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.pasajeroService.findOne(+id);
  }
  @Get('ToptreOnRange/:Actuallatitud/:Actuallongitud')
  findAllInRange(@Param('Actuallatitud') Actuallatitud:string,@Param('Actuallongitud') Actuallongitud:string){
    return  this.pasajeroService.ToptreOnRange(Actuallatitud,Actuallongitud);
  }

}
