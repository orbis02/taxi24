import { Module } from '@nestjs/common';
import { ViajesService } from './viajes.service';
import { ViajesController } from './viajes.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ViajeEntity } from './entities/viaje.entity';
import { ConductorEntity } from 'src/conductor/entities/conductor.entity';
import { PasajeroService } from '../pasajero/pasajero.service';
import { PasajeroEntity } from 'src/pasajero/entities/pasajero.entity';
import { GeolacalitationServices } from 'src/geolocalitation/geolocalitation.service';
import { FacturaEntity } from './entities/facturas.entity';


@Module({
  imports:[TypeOrmModule.forFeature([ViajeEntity,ConductorEntity,PasajeroEntity,FacturaEntity])],
  controllers: [ViajesController],
  providers: [ViajesService,PasajeroService,GeolacalitationServices]
})
export class ViajesModule {}
