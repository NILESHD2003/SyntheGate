import { Test, TestingModule } from '@nestjs/testing';
import { ProjectForgeController } from './project-forge.controller';

describe('ProjectForgeController', () => {
  let controller: ProjectForgeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProjectForgeController],
    }).compile();

    controller = module.get<ProjectForgeController>(ProjectForgeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
