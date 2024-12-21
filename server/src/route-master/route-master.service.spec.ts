import { Test, TestingModule } from '@nestjs/testing';
import { RouteMasterService } from './route-master.service';

describe('RouteMasterService', () => {
  let service: RouteMasterService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RouteMasterService],
    }).compile();

    service = module.get<RouteMasterService>(RouteMasterService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
