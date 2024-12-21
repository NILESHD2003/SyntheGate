import { Test, TestingModule } from '@nestjs/testing';
import { ServiceAtlasService } from './service-atlas.service';

describe('ServiceAtlasService', () => {
  let service: ServiceAtlasService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ServiceAtlasService],
    }).compile();

    service = module.get<ServiceAtlasService>(ServiceAtlasService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
