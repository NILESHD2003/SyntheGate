import {
  Body,
  Controller,
  Get,
  HttpStatus,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { ServiceAtlasService } from './service-atlas.service';
import {
  CreateServiceClusterDto,
  GetAllClusterQueryDto,
  GetClusterQueryDto,
  RegisterServiceNodeDto,
  ServiceNodeQueryDto,
  UpdateClusterDto,
} from './dto/service.dto';
import {
  HealthDto,
  DataResponseDto,
  AcknowledgementDto,
} from '../generic-response.dto';

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

  @Post('cluster/create')
  async createCluster(
    @Body() body: CreateServiceClusterDto,
  ): Promise<DataResponseDto<object>> {
    return await this.serviceAtlasService.createServiceClusters(body);
  }

  @Get('cluster/all')
  async getAllClusters(
    @Query() query: GetAllClusterQueryDto,
  ): Promise<DataResponseDto<object>> {
    return await this.serviceAtlasService.getServiceClusters(
      query.project_slug,
    );
  }

  @Get('cluster')
  async getCluster(
    @Query() query: GetClusterQueryDto,
  ): Promise<DataResponseDto<object>> {
    return await this.serviceAtlasService.getServiceCluster(
      query.cluster_slug,
      query.project_slug,
    );
  }

  // TODO: delete service group/ cluster
  // TODO: edit service group/ cluster

  @Patch('cluster/edit')
  async editCluster(
    @Body() body: UpdateClusterDto,
    @Query() query: GetClusterQueryDto,
  ): Promise<AcknowledgementDto> {
    return await this.serviceAtlasService.editServiceCluster(body, query);
  }

  @Post('service-node/register')
  async registerServiceNode(
    @Body() body: RegisterServiceNodeDto,
  ): Promise<AcknowledgementDto> {
    return await this.serviceAtlasService.registerNode(body);
  }
  // TODO: get node data
  @Get('service-node/node-details')
  async getNodeData(
    @Query() query: ServiceNodeQueryDto,
  ): Promise<DataResponseDto<object>> {
    return await this.serviceAtlasService.getNodeData(query.node_id);
  }
  // TODO: remove a node
  @Patch('service-node/toggle-status')
  async toggleNodeStatus(
    @Query() query: ServiceNodeQueryDto,
  ): Promise<AcknowledgementDto> {
    return await this.serviceAtlasService.toggleNodeStatus(query.node_id);
  }

  // TODO: switch a node to primary -- AMBIGUOUS CODE REVIEW REQUIRED
  @Patch('service-node/toggle-primary')
  async toggleNodePrimary(
    @Query() query: ServiceNodeQueryDto,
  ): Promise<AcknowledgementDto> {
    return await this.serviceAtlasService.toggleNodePrimary(query.node_id);
  }

  //TODO: Add Eureka Service
  //TODO: Add Watch tower to monitor service health(s)
}
