import { PasajeroService } from './pasajero.service';
import { CreatePasajeroDto } from './dto/create-pasajero.dto';
export declare class PasajeroController {
    private readonly pasajeroService;
    constructor(pasajeroService: PasajeroService);
    create(createPasajeroDto: CreatePasajeroDto): Promise<import("./entities/pasajero.entity").PasajeroEntity>;
    findAll(): Promise<import("./entities/pasajero.entity").PasajeroEntity[]>;
    findOne(id: string): Promise<import("./entities/pasajero.entity").PasajeroEntity>;
    findAllInRange(Actuallatitud: string, Actuallongitud: string): Promise<any>;
}
