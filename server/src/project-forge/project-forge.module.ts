import { Module } from '@nestjs/common';
import { ProjectForgeService } from './project-forge.service';
import {
  ProjectForgeController,
  ProjectForgeProjectController,
} from './project-forge.controller';
import { ServiceHandlerModule } from './service-handler/service-handler.module';

@Module({
  providers: [ProjectForgeService],
  controllers: [ProjectForgeController, ProjectForgeProjectController],
  imports: [ServiceHandlerModule],
})
export class ProjectForgeModule {}
