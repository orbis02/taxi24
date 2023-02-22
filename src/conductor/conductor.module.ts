import { Module } from '@nestjs/common';
import { ConductorService } from './conductor.service';
import { ConductorController } from './conductor.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConductorEntity } from './entities/conductor.entity';
import { GeolacalitationServices } from 'src/geolocalitation/geolocalitation.service';


@Module({
  imports:[TypeOrmModule.forFeature([ConductorEntity])],
  controllers: [ConductorController],
  providers: [ConductorService,GeolacalitationServices]
})
export class ConductorModule {}
