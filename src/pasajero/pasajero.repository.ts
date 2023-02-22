import { EntityRepository, Repository } from "typeorm";
import { PasajeroEntity } from './entities/pasajero.entity';
@EntityRepository(PasajeroEntity)
export class PasajeroRepository extends Repository<PasajeroEntity>{

}