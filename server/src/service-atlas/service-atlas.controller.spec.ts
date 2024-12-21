import { Test, TestingModule } from '@nestjs/testing';
import { ServiceAtlasController } from './service-atlas.controller';

describe('ServiceAtlasController', () => {
  let controller: ServiceAtlasController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ServiceAtlasController],
    }).compile();

    controller = module.get<ServiceAtlasController>(ServiceAtlasController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
