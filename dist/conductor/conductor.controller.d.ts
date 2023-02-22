import { ConductorService } from './conductor.service';
import { CreateConductorDto } from './dto/create-conductor.dto';
export declare class ConductorController {
    private readonly conductorService;
    constructor(conductorService: ConductorService);
    create(createConductorDto: CreateConductorDto): Promise<import("./entities/conductor.entity").ConductorEntity>;
    findAll(): Promise<import("./entities/conductor.entity").ConductorEntity[]>;
    findAllAvailable(): Promise<import("./entities/conductor.entity").ConductorEntity[]>;
    findOne(id: string): Promise<import("./entities/conductor.entity").ConductorEntity>;
    findAllInRange(Actuallatitud: string, Actuallongitud: string): Promise<any[] | import("@nestjs/common").NotFoundException>;
}
