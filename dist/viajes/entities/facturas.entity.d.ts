import { ViajeEntity } from './viaje.entity';
export declare class FacturaEntity {
    id: number;
    viaje: ViajeEntity;
    distancia: number;
    precio_por_kilometro: number;
    total: number;
    estado: boolean;
}
