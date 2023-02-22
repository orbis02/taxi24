import { ConductorEntity } from 'src/conductor/entities/conductor.entity';
import { PasajeroEntity } from 'src/pasajero/entities/pasajero.entity';
import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { ViajeEntity } from './viaje.entity';

@Entity('facturas')
export class FacturaEntity {
    @PrimaryGeneratedColumn()
    id:number;
    @OneToOne(()=>ViajeEntity, viaje=>viaje.id,{onDelete:'SET NULL'})
    @JoinColumn()
    viaje:ViajeEntity;
    @Column()
    distancia:number;
    @Column()
    precio_por_kilometro:number;
    @Column()
    total:number;
    @Column({ type: 'boolean', default: true })
    estado:boolean

}
