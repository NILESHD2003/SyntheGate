import { Test, TestingModule } from '@nestjs/testing';
import { ProjectForgeService } from './project-forge.service';

describe('ProjectForgeService', () => {
  let service: ProjectForgeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProjectForgeService],
    }).compile();

    service = module.get<ProjectForgeService>(ProjectForgeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
