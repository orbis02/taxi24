import { CreateViajeDto } from './dto/create-viaje.dto';
import { ViajeEntity } from './entities/viaje.entity';
import { ViajeRepository } from './viajes.repository';
import { PasajeroService } from '../pasajero/pasajero.service';
import { ConductorRepository } from '../conductor/conductor.repository';
import { FacturaEntity } from './entities/facturas.entity';
import { FacturaRepository } from './facturars.repository';
import { GeolacalitationServices } from '../geolocalitation/geolocalitation.service';
export declare class ViajesService {
    private viajesRepository;
    private conductorRepository;
    private facturaRepository;
    private readonly pasajeroService;
    private readonly geolacalitationServices;
    constructor(viajesRepository: ViajeRepository, conductorRepository: ConductorRepository, facturaRepository: FacturaRepository, pasajeroService: PasajeroService, geolacalitationServices: GeolacalitationServices);
    create(createViajeDto: CreateViajeDto): Promise<ViajeEntity>;
    findAll(): Promise<ViajeEntity[]>;
    update(id: number): Promise<FacturaEntity>;
}
