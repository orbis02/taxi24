import { Injectable, NotFoundException, UseFilters } from '@nestjs/common';
import { CreateViajeDto } from './dto/create-viaje.dto';

import { InjectRepository } from '@nestjs/typeorm';
import { ViajeEntity } from './entities/viaje.entity';
import { ViajeRepository } from './viajes.repository';
import { PasajeroService } from '../pasajero/pasajero.service';
import { ConductorEntity } from '../conductor/entities/conductor.entity';
import { ConductorRepository } from '../conductor/conductor.repository';
import { FacturaEntity } from './entities/facturas.entity';
import { FacturaRepository } from './facturars.repository';
import { GeolacalitationServices } from '../geolocalitation/geolocalitation.service';
import {PRECIO_POR_KILOMENTRO} from '../helpers/config';

@Injectable()
export class ViajesService {
  constructor(
    @InjectRepository(ViajeEntity) private  viajesRepository:ViajeRepository,
    @InjectRepository(ConductorEntity) private  conductorRepository:ConductorRepository,
    @InjectRepository(FacturaEntity) private  facturaRepository:FacturaRepository,
    private readonly pasajeroService:PasajeroService,
    private readonly geolacalitationServices: GeolacalitationServices
  ){}
  //creamos un viaje
  async create(createViajeDto: CreateViajeDto) {
      const {lat_partida,lon_partida} =createViajeDto;
//buscamos los conductores mas cercanos y asignamos el primero 
      const conductor=await this.pasajeroService.ToptreOnRange(lat_partida,lon_partida);
      
            if(conductor.length < 0)
            {
               throw new NotFoundException('No existen conductores disponblie en este momento')
            }
   
            const conductorseleccionado=await  this.conductorRepository.findOneBy({id:conductor[0].id})
            const pasajero=await this.pasajeroService.findOne(createViajeDto.pasajeroid);
      const NuevoViaje = new ViajeEntity();
            NuevoViaje.lat_partida=lat_partida;
            NuevoViaje.lon_partida=lon_partida;
            NuevoViaje.conductor=conductorseleccionado;
            NuevoViaje.pasajero=pasajero;
            NuevoViaje.lat_destino=createViajeDto.lat_destino;
            NuevoViaje.lon_destino=createViajeDto.lon_destino;
      const viaje=await this.viajesRepository.create(NuevoViaje);
      //salvamos el viaje 
       const res=await this.viajesRepository.save(viaje);
      if(res.id > 0){
      //acutalizamos estado del conductor. 
                conductorseleccionado.status=false;
          await this.conductorRepository.save(conductorseleccionado);
     
         return res;
      }
  }
//buscamos todos los viajes
  async findAll() {
    const viajes = await this.viajesRepository.find({where:{estado_carrera:true}});
      if(viajes.length <= 0 )
      {
        throw new NotFoundException('No existen viajes activos');
        
      }
    return viajes;
  }


//completamos un viaje especifico y generamos factura..
  async update(id: number) {

     const viaje =await this.viajesRepository.findOneBy({id:id});
     if(!viaje){

      throw new NotFoundException('No se encontro el viaje indicado')
     }
      viaje.estado_carrera=false;
      const result=await this.viajesRepository.save(viaje);
         if(result){
          //generamos la factura
          const distancia =await this.geolacalitationServices.calculateDistance(+viaje.lat_partida,+viaje.lon_partida,+viaje.lat_destino,+viaje.lon_destino)
         // console.log(distancia);
          const Newfactura = new FacturaEntity();
                Newfactura.distancia=+distancia.toFixed(0);
                Newfactura.viaje=viaje;
                Newfactura.precio_por_kilometro=PRECIO_POR_KILOMENTRO;
                Newfactura.total=+(distancia*PRECIO_POR_KILOMENTRO).toFixed(0);
                const  factura = await this.facturaRepository.create(Newfactura);
                      return await this.facturaRepository.save(factura);
         }
   
  }

  
}
