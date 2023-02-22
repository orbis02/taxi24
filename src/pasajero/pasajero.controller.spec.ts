import { Test, TestingModule } from '@nestjs/testing';
import { PasajeroController } from './pasajero.controller';
import { PasajeroService } from './pasajero.service';

describe('PasajeroController', () => {
  let controller: PasajeroController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PasajeroController],
      providers: [PasajeroService],
    }).compile();

    controller = module.get<PasajeroController>(PasajeroController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
