import { Controller } from '@nestjs/common';
import { ServiceAtlasService } from './service-atlas.service';

@Controller('service-atlas')
export class ServiceAtlasController {
  constructor(private readonly serviceAtlasService: ServiceAtlasService) {}

  // TODO: create a service group
  // TODO: delete service group
  // TODO: edit service group

  // TODO: add config to service groups
  // TODO: edit service groups config

  // TODO: register a service
  // TODO: remove a service
  // TODO: toggle service status

  //TODO: Add Eureka Service
  //TODO: Add Watch tower to monitor service healths
}
