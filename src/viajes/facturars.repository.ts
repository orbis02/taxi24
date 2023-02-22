import { EntityRepository, Repository } from "typeorm";
import { FacturaEntity } from './entities/facturas.entity';

@EntityRepository(FacturaEntity)
export class FacturaRepository extends Repository<FacturaEntity>{

}