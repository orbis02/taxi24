import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ConductorRepository } from 'src/conductor/conductor.repository';
import { ConductorEntity } from 'src/conductor/entities/conductor.entity';
import { GeolacalitationServices } from 'src/geolocalitation/geolocalitation.service';
import { CreatePasajeroDto } from './dto/create-pasajero.dto';
import { PasajeroEntity } from './entities/pasajero.entity';
import { PasajeroRepository } from './pasajero.repository';

@Injectable()
export class PasajeroService {
  constructor( @InjectRepository(PasajeroEntity) private pasajeroRepository:PasajeroRepository,
  @InjectRepository(ConductorEntity) private conductorRepository:ConductorRepository,
  private readonly geolacalitationServices:GeolacalitationServices

){}
 async create(createPasajeroDto: CreatePasajeroDto) {
  const {correo}=createPasajeroDto;
  const pasajero=await this.pasajeroRepository.findOneBy({correo:correo});
  //validamos que el pasajero no exista si existe retornamo una execption de lo contrario lo creamos.
  if(pasajero){
     throw new ConflictException('El pasajero ya existe');
  }
  else{
    const Pasajero=this.pasajeroRepository.create(createPasajeroDto);
    return  this.pasajeroRepository.save(Pasajero);

  }

  }

  async findAll() {
     //retornar un listado de todos  los pasajeros... 
     const pasajeros =await this.pasajeroRepository.find();
      if(!pasajeros.length){

         throw new NotFoundException('No se econtraron pasajeros')
      }

    return pasajeros;
  }

  async findOne(id: number) {
       //retornar pasajero por id
       const pasajero = await this.pasajeroRepository.findOneBy({id:id});
       if(!pasajero){
        throw new NotFoundException('El pasajero no existe');
       }
  
      return pasajero;

   
  }
async ToptreOnRange(Actuallatitud:string,Actuallongitud:string){

  //buscamos todos los conductores disponibles
  const conductores =await this.conductorRepository.find({where:{status:true}});
  if(!conductores.length){

     throw new NotFoundException('No se econtraron conductores disponibles')
  }
 //de todos conductores disponibles retornamos todos los que se  encuentren en  un rango de  3 km 
 const conductoresOnRange=[];
  await conductores.forEach(async element => {
       
          //usamos la siguiente funcion para calcular la distancia entre el punto de partida proporcionado y la de los conductores
         let distance=this. geolacalitationServices.calculateDistance(+Actuallatitud,+Actuallongitud, +element.lat,+element.lon);
           element['distance']=distance;
           conductoresOnRange.push(element);

  });

       const conductoresCloser=this.geolacalitationServices.getTopThreeLocations(conductoresOnRange);

 return (!conductoresCloser.length)?  new NotFoundException('No se encontraron conductores disponible'):conductoresCloser; 

  
}
 
}
