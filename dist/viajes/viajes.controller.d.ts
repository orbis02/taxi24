import { ViajesService } from './viajes.service';
import { CreateViajeDto } from './dto/create-viaje.dto';
export declare class ViajesController {
    private readonly viajesService;
    constructor(viajesService: ViajesService);
    create(createViajeDto: CreateViajeDto): Promise<import("./entities/viaje.entity").ViajeEntity>;
    findAll(): Promise<import("./entities/viaje.entity").ViajeEntity[]>;
    update(id: string): Promise<import("./entities/facturas.entity").FacturaEntity>;
}
