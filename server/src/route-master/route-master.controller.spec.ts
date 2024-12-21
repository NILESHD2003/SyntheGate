import { Test, TestingModule } from '@nestjs/testing';
import { RouteMasterController } from './route-master.controller';

describe('RouteMasterController', () => {
  let controller: RouteMasterController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RouteMasterController],
    }).compile();

    controller = module.get<RouteMasterController>(RouteMasterController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
