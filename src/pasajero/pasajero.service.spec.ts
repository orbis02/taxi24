import { Test, TestingModule } from '@nestjs/testing';
import { PasajeroService } from './pasajero.service';

describe('PasajeroService', () => {
  let service: PasajeroService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PasajeroService],
    }).compile();

    service = module.get<PasajeroService>(PasajeroService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
