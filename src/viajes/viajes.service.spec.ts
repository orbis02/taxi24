import { Test, TestingModule } from '@nestjs/testing';
import { ViajesService } from './viajes.service';

describe('ViajesService', () => {
  let service: ViajesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ViajesService],
    }).compile();

    service = module.get<ViajesService>(ViajesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
