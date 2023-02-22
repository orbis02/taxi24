import { NotFoundException } from '@nestjs/common';
import { CreateConductorDto } from './dto/create-conductor.dto';
import { ConductorEntity } from './entities/conductor.entity';
import { ConductorRepository } from './conductor.repository';
import { GeolacalitationServices } from 'src/geolocalitation/geolocalitation.service';
export declare class ConductorService {
    private conductorRepository;
    private readonly geolacalitationServices;
    constructor(conductorRepository: ConductorRepository, geolacalitationServices: GeolacalitationServices);
    create(createConductorDto: CreateConductorDto): Promise<ConductorEntity>;
    findAll(): Promise<ConductorEntity[]>;
    findAllAvailable(): Promise<ConductorEntity[]>;
    findOne(id: number): Promise<ConductorEntity>;
    findAllInRange(Actuallatitud: string, Actuallongitud: string): Promise<any[] | NotFoundException>;
}
