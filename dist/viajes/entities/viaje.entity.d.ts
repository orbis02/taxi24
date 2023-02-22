import { ConductorEntity } from 'src/conductor/entities/conductor.entity';
import { PasajeroEntity } from 'src/pasajero/entities/pasajero.entity';
export declare class ViajeEntity {
    id: number;
    lat_partida: string;
    lon_partida: string;
    lat_destino: string;
    lon_destino: string;
    pasajero: PasajeroEntity;
    conductor: ConductorEntity;
    estado_carrera: boolean;
}
