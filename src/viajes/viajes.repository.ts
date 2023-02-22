import { EntityRepository, Repository } from "typeorm";
import { ViajeEntity } from './entities/viaje.entity';
@EntityRepository(ViajeEntity)
export class ViajeRepository extends Repository<ViajeEntity>{

}