import { ConductorEntity } from 'src/conductor/entities/conductor.entity';
import { PasajeroEntity } from 'src/pasajero/entities/pasajero.entity';
import { Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity('viaje')
export class ViajeEntity {
    @PrimaryGeneratedColumn()
    id:number;
    @Column()
    lat_partida:string;
    @Column()
    lon_partida:string;
    @Column()
    lat_destino:string;
    @Column()
    lon_destino:string;
    @ManyToOne(()=>PasajeroEntity, pasajero=>pasajero.id,{onDelete:'SET NULL'})
    @JoinColumn()
    pasajero:PasajeroEntity;
    @ManyToOne(()=>ConductorEntity, conductor=>conductor.id,{onDelete:'SET NULL'})
    @JoinColumn()
    conductor:ConductorEntity;
    @Column({ type: 'boolean', default: true })
    estado_carrera:boolean

}
