import { Module } from '@nestjs/common';
import { PasajeroService } from './pasajero.service';
import { PasajeroController } from './pasajero.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PasajeroEntity } from './entities/pasajero.entity';
import { GeolacalitationServices } from '../geolocalitation/geolocalitation.service';
import { ConductorEntity } from 'src/conductor/entities/conductor.entity';

@Module({
  imports:[TypeOrmModule.forFeature([PasajeroEntity,ConductorEntity])],
  controllers: [PasajeroController],
  providers: [PasajeroService,GeolacalitationServices]
})
export class PasajeroModule {}
