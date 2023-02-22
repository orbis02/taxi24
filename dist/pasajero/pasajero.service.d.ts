import { ConductorRepository } from 'src/conductor/conductor.repository';
import { GeolacalitationServices } from 'src/geolocalitation/geolocalitation.service';
import { CreatePasajeroDto } from './dto/create-pasajero.dto';
import { PasajeroEntity } from './entities/pasajero.entity';
import { PasajeroRepository } from './pasajero.repository';
export declare class PasajeroService {
    private pasajeroRepository;
    private conductorRepository;
    private readonly geolacalitationServices;
    constructor(pasajeroRepository: PasajeroRepository, conductorRepository: ConductorRepository, geolacalitationServices: GeolacalitationServices);
    create(createPasajeroDto: CreatePasajeroDto): Promise<PasajeroEntity>;
    findAll(): Promise<PasajeroEntity[]>;
    findOne(id: number): Promise<PasajeroEntity>;
    ToptreOnRange(Actuallatitud: string, Actuallongitud: string): Promise<any>;
}
