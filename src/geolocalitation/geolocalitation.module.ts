import { Module } from '@nestjs/common';
import { GeolacalitationServices } from 'src/geolocalitation/geolocalitation.service';
@Module({

  providers: [GeolacalitationServices]
})
export class GeolocalitationModule {}
