import { BlobOptions } from 'buffer';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('pasajero')
export class PasajeroEntity {
    @PrimaryGeneratedColumn()
    id:number;
    @Column()
    nombre:string;
    @Column()
    telefonon:string;
    @Column()
    correo:string
    @Column({ type: 'boolean', default: true })
    status:boolean;
}
