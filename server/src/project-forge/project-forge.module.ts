import { Module } from '@nestjs/common';
import { ProjectForgeService } from './project-forge.service';
import {
  ProjectForgeController,
  ProjectForgeProjectController,
} from './project-forge.controller';

@Module({
  providers: [ProjectForgeService],
  controllers: [ProjectForgeController, ProjectForgeProjectController],
  imports: [],
})
export class ProjectForgeModule {}
