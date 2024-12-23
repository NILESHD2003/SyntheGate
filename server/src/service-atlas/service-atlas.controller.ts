import { Body, Controller, Get, HttpStatus, Param, Post } from '@nestjs/common';
import { ServiceAtlasService } from './service-atlas.service';
import { CreateServiceDto } from './dto/service.dto';
import { HealthDto } from '../project-forge/dto/health.dto';

@Controller('service-atlas')
export class ServiceAtlasController {
  constructor(private readonly serviceAtlasService: ServiceAtlasService) {}

  @Get('health')
  health(): HealthDto {
    return {
      status: HttpStatus.OK,
      message: 'Service Atlas is running',
    };
  }

  // TODO: create a service group
  // TODO: delete service group
  // TODO: edit service group

  // TODO: add config to service groups
  // TODO: edit service groups config

  @Post('register')
  async register(@Body() body: CreateServiceDto) {
    return await this.serviceAtlasService.registerNewService(body);
  }

  @Get('services/:slug')
  async getServices(@Param('slug') project_slug: string) {
    return await this.serviceAtlasService.getServicesByProject(project_slug);
  }
  // TODO: remove a service
  // TODO: toggle service status

  //TODO: Add Eureka Service
  //TODO: Add Watch tower to monitor service healths
}
