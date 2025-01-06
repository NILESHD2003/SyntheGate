import { Module } from '@nestjs/common';
import { ProjectForgeService } from './project-forge.service';
import {
  ProjectForgeConfigController,
  ProjectForgeController,
  ProjectForgeProjectController,
} from './project-forge.controller';

@Module({
  providers: [ProjectForgeService],
  controllers: [
    ProjectForgeController,
    ProjectForgeProjectController,
    ProjectForgeConfigController,
  ],
  imports: [],
})
export class ProjectForgeModule {}
