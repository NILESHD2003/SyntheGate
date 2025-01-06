import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import {
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiOperation,
} from '@nestjs/swagger';
import { HealthDto } from '../generic-response.dto';
import { ProjectDto } from './dto/project.dto';
import { ProjectForgeService } from './project-forge.service';
import {
  CreateClusterConfigDto,
  GetProjectConfigQueryDto,
  GetProjectConfigsQueryDto,
  UpdateConfigBodyDto,
  UpdateConfigQueryDto,
} from './dto/clusterConfig.dto';

@Controller('project-forge')
export class ProjectForgeController {
  @ApiOperation({ summary: 'Health Check service for Project Forge' })
  @ApiOkResponse({
    description: 'Project Forge is running',
    example: {
      status: HttpStatus.OK,
      message: 'Project Forge is running',
    },
  })
  @ApiNotFoundResponse({
    description: 'Cannot GET /project-forge/health',
    example: {
      status: HttpStatus.NOT_FOUND,
      message: 'Cannot GET /project-forge/health',
    },
  })
  @Get('health')
  health(): HealthDto {
    return {
      status: HttpStatus.OK,
      message: 'Project Forge is running',
    };
  }
}

@Controller('project-forge/project')
export class ProjectForgeProjectController {
  constructor(private readonly projectForgeService: ProjectForgeService) {}

  @Post('new')
  async createProject(@Body() body: ProjectDto) {
    return await this.projectForgeService.createProject(body);
  }

  // Get all projects by user
  @Get(':userId/all')
  async getAllProjects(@Param('userId') userId: string) {
    return await this.projectForgeService.getProjects(userId);
  }

  // Get specific project details
  @Get(':userId/:slug')
  async getProjectDetails(
    @Param('slug') slug: string,
    @Param('userId') userId: string,
  ) {
    return await this.projectForgeService.getProject(slug, userId);
  }

  @Patch('/update/:id')
  updateProject() {
    return 'Update Project API';
  }

  @Delete('/delete/:id')
  deleteProject() {
    return 'Delete Project API';
  }
}

@Controller('project-forge/config')
export class ProjectForgeConfigController {
  constructor(private readonly projectForgeService: ProjectForgeService) {}

  @Post('create')
  async createClusterConfig(@Body() body: CreateClusterConfigDto) {
    return await this.projectForgeService.createClusterConfig(body);
  }

  @Get('/all')
  async getAllConfigs(@Query() query: GetProjectConfigsQueryDto) {
    return await this.projectForgeService.getAllConfigs(query);
  }

  @Get('/get')
  async getConfig(@Query() query: GetProjectConfigQueryDto) {
    return await this.projectForgeService.getConfig(query);
  }

  @Patch('update')
  async updateConfig(
    @Query() query: UpdateConfigQueryDto,
    @Body() body: UpdateConfigBodyDto,
  ) {
    return await this.projectForgeService.updateConfig(query, body);
  }

  @Delete('delete')
  async deleteConfig(@Query() query: UpdateConfigQueryDto) {
    return await this.projectForgeService.deleteConfig(query);
  }
}
