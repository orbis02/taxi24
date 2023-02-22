import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
@Entity('condunctor')
export class ConductorEntity {
    @PrimaryGeneratedColumn()
    id:number;
    @Column()
    identificacion:string;
    @Column()
    nombre:string;
    @Column()
    telefono:string;
    @Column()
    correo:string;
    @Column()
    lat:string;
    @Column()
    lon:string;
    @Column({ type: 'boolean', default: true })
    status:boolean
    


}
