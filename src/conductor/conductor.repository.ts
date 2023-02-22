import { EntityRepository, Repository } from "typeorm";
import { ConductorEntity } from './entities/conductor.entity';
@EntityRepository(ConductorEntity)
export class ConductorRepository extends Repository<ConductorEntity>{

}