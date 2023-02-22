import { Test, TestingModule } from '@nestjs/testing';
import { ViajesController } from './viajes.controller';
import { ViajesService } from './viajes.service';

describe('ViajesController', () => {
  let controller: ViajesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ViajesController],
      providers: [ViajesService],
    }).compile();

    controller = module.get<ViajesController>(ViajesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
