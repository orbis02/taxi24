import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ConductorService } from './conductor.service';
import { CreateConductorDto } from './dto/create-conductor.dto';
import { ApiTags } from '@nestjs/swagger';
@ApiTags('Control de Conductores')
@Controller('conductor')
export class ConductorController {
  constructor(private readonly conductorService: ConductorService) {}

  @Post()
  create(@Body() createConductorDto: CreateConductorDto) {
    return this.conductorService.create(createConductorDto);
  }

  @Get('todos')
  findAll() {
    return this.conductorService.findAll();
  }
 @Get('todosdisponible')
  findAllAvailable(){
  return this.conductorService.findAllAvailable();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.conductorService.findOne(+id);
  }
  @Get('disponiblesenrango/:Actuallatitud/:Actuallongitud')
  findAllInRange(@Param('Actuallatitud') Actuallatitud:string,@Param('Actuallongitud') Actuallongitud:string){
    return  this.conductorService.findAllInRange(Actuallatitud,Actuallongitud);
  }
 
}
