import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ViajesService } from './viajes.service';
import { CreateViajeDto } from './dto/create-viaje.dto';

import { ApiTags } from '@nestjs/swagger';
@ApiTags('Control de Viajes')
@Controller('viajes')
export class ViajesController {
  constructor(private readonly viajesService: ViajesService) {}

  @Post('crear')
  create(@Body() createViajeDto: CreateViajeDto) {
    return this.viajesService.create(createViajeDto);
  }

  @Get('activos')
  findAll() {
    return this.viajesService.findAll();
  }

 

  @Patch('completar/:id')
  update(@Param('id') id: string) {
    return this.viajesService.update(+id);
  }


}
