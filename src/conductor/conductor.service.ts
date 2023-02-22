import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateConductorDto } from './dto/create-conductor.dto';
import { ConductorEntity } from './entities/conductor.entity';
import { ConductorRepository } from './conductor.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { GeolacalitationServices } from 'src/geolocalitation/geolocalitation.service';

@Injectable()
export class ConductorService {
  constructor( @InjectRepository(ConductorEntity) private conductorRepository:ConductorRepository,
               private readonly geolacalitationServices:GeolacalitationServices
  
  ){}
  async create(createConductorDto: CreateConductorDto) {
   
    const {identificacion}=createConductorDto;
    const conductor=await this.conductorRepository.findOneBy({identificacion:identificacion});
    //validamos que el conductor no exista si existe retornamo una execption de lo contrario lo creamos.
    if(conductor){
       throw new ConflictException('El conductor ya existe');
    }
    else{
      const Conductor=this.conductorRepository.create(createConductorDto);
      return  this.conductorRepository.save(Conductor);

    }

   
  }

  async findAll() {
    //retornar un listado de todos  los conductores... 
     const conductores =await this.conductorRepository.find();
      if(!conductores.length){

         throw new NotFoundException('No se econtraron conductores')
      }

    return conductores;
  }
  async findAllAvailable() {
    //retornar un listado de todos  los conductores que estan disponibles... 
     const conductores =await this.conductorRepository.find({where:{status:true}});
      if(!conductores.length){

         throw new NotFoundException('No se econtraron conductores disponibles')
      }

    return conductores;
  }

async  findOne(id: number) {
   //retornar conductor por id
     const conductor = await this.conductorRepository.findOneBy({id:id});
     if(!conductor){
      throw new NotFoundException('El conductor no existe');
     }

    return conductor;
  }

  async findAllInRange(Actuallatitud:string,Actuallongitud:string){
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
            if(distance <=3) {

              element['distance']=distance;
              conductoresOnRange.push(element);

            }
            
    });

   return (!conductoresOnRange.length)?  new NotFoundException('No se encontraron conductores disponible en un rango de 3km'):conductoresOnRange; 

  }


}
