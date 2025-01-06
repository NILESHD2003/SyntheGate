import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import {
  CreateServiceClusterDto,
  GetClusterQueryDto,
  RegisterServiceNodeDto,
  UpdateClusterDto,
} from './dto/service.dto';
import { PrismaService } from '../prisma/prisma.service';
import slugify from 'slugify';
import { AcknowledgementDto, DataResponseDto } from '../generic-response.dto';

@Injectable()
export class ServiceAtlasService {
  constructor(private readonly prismaService: PrismaService) {}

  async createServiceClusters(
    dto: CreateServiceClusterDto,
  ): Promise<DataResponseDto<object>> {
    //get project details
    const project = await this.prismaService
      .getPostgresClient()
      .project.findUnique({
        where: { slug: dto.project_slug },
        select: { id: true, base_url: true },
      });
    if (!project) {
      throw new HttpException('Project not found', HttpStatus.NOT_FOUND);
    }
    // generate a slug based on name
    const cluster_slug = slugify(dto.name, {
      lower: true,
      strict: true,
      replacement: '-',
      remove: /[*+~.()'"!:@]/g,
      locale: 'en',
    });
    // check if the same slug is used in same project
    const existingCluster = await this.prismaService
      .getPostgresClient()
      .cluster.findFirst({
        where: {
          project_id: project.id,
        },
      });
    if (existingCluster) {
      throw new HttpException('Cluster already exists', HttpStatus.CONFLICT);
    }
    //create new cluster
    const cluster = await this.prismaService
      .getPostgresClient()
      .cluster.create({
        data: {
          project_id: project.id,
          name: dto.name,
          description: dto.description ? dto.description : null,
          cluster_slug: cluster_slug,
          cluster_url: `${project.base_url}/${cluster_slug}`,
        },
      });

    return {
      status: HttpStatus.CREATED,
      success: true,
      message: 'Cluster successfully created',
      data: {
        cluster_slug: cluster.cluster_slug,
      },
    };
  }

  async getServiceClusters(project_slug: string) {
    const project = await this.prismaService
      .getPostgresClient()
      .project.findUnique({
        where: { slug: project_slug },
        include: {
          clusters: true,
        },
      });

    if (!project) {
      throw new HttpException('Project not found', HttpStatus.NOT_FOUND);
    }

    return {
      status: HttpStatus.OK,
      success: true,
      message: 'Clusters Fetched successfully',
      data: project.clusters,
    };
  }

  async getServiceCluster(
    cluster_slug: string,
    project_slug: string,
  ): Promise<DataResponseDto<object>> {
    const project = await this.prismaService
      .getPostgresClient()
      .project.findUnique({
        where: { slug: project_slug },
        select: {
          id: true,
        },
      });

    if (!project) {
      throw new HttpException('Project not found', HttpStatus.NOT_FOUND);
    }

    const cluster = await this.prismaService
      .getPostgresClient()
      .cluster.findFirst({
        where: {
          cluster_slug: cluster_slug,
          project_id: project.id,
        },
        include: {
          nodes: true,
        },
      });

    if (!cluster) {
      throw new HttpException('Cluster not found', HttpStatus.NOT_FOUND);
    }

    return {
      status: HttpStatus.OK,
      success: true,
      message: 'Cluster Fetched successfully',
      data: cluster,
    };
  }

  async editServiceCluster(
    dto: UpdateClusterDto,
    query: GetClusterQueryDto,
  ): Promise<AcknowledgementDto> {
    const project = await this.prismaService
      .getPostgresClient()
      .project.findUnique({
        where: { slug: query.project_slug },
      });
    const cluster = await this.prismaService
      .getPostgresClient()
      .cluster.findFirst({
        where: {
          cluster_slug: query.cluster_slug,
          project_id: project.id,
        },
      });

    if (!cluster) {
      throw new HttpException('Cluster not found', HttpStatus.NOT_FOUND);
    }

    const data = {};
    if (dto.description) {
      data['description'] = dto.description;
    }

    if (dto.config_slug) {
      const config = await this.prismaService
        .getPostgresClient()
        .clusterConfig.findFirst({
          where: {
            config_slug: dto.config_slug,
            project_id: project.id,
          },
        });

      if (!config) {
        throw new HttpException('Config not found', HttpStatus.NOT_FOUND);
      }

      data['config_id'] = config.id;

      // push the cluster id into the cluster array in config
      await this.prismaService.getPostgresClient().clusterConfig.update({
        where: { id: config.id },
        data: {
          clusters: {
            connect: {
              id: cluster.id,
            },
          },
        },
      });
    }

    await this.prismaService.getPostgresClient().cluster.update({
      where: { id: cluster.id },
      data: data,
    });

    return {
      status: HttpStatus.OK,
      success: true,
      message: 'Cluster updated successfully',
    };
  }

  async registerNode(
    body: RegisterServiceNodeDto,
  ): Promise<AcknowledgementDto> {
    // get project from DB
    const project = await this.prismaService
      .getPostgresClient()
      .project.findUnique({
        where: { slug: body.project_slug },
        select: { id: true },
      });

    if (!project) {
      throw new HttpException('Project not found', HttpStatus.NOT_FOUND);
    }

    //now get the cluster for corresponding project
    const cluster = await this.prismaService
      .getPostgresClient()
      .cluster.findFirst({
        where: { cluster_slug: body.cluster_slug, project_id: project.id },
        include: {
          nodes: true,
        },
      });

    if (!cluster) {
      throw new HttpException('Cluster not found', HttpStatus.NOT_FOUND);
    }

    const checkPrimary = cluster.nodes.length === 0;

    await this.prismaService.getPostgresClient().serviceNode.create({
      data: {
        proxy_url: body.proxy_url,
        description: body.description ? body.description : null,
        is_healthy: true,
        is_primary: checkPrimary,
        weight: body.weight,
        cluster_id: cluster.id,
      },
    });

    return {
      status: HttpStatus.CREATED,
      success: true,
      message: `Node created successfully for ${body.cluster_slug}. It may take few minutes to spin up.`,
    };
  }

  async getNodeData(node_id: string): Promise<DataResponseDto<object>> {
    const node = await this.prismaService
      .getPostgresClient()
      .serviceNode.findUnique({
        where: { id: node_id },
      });

    if (!node) {
      throw new HttpException('Node not found', HttpStatus.NOT_FOUND);
    }

    return {
      status: HttpStatus.OK,
      success: true,
      message: 'Node Fetched successfully',
      data: node,
    };
  }

  async toggleNodeStatus(node_id: string): Promise<AcknowledgementDto> {
    const node = await this.prismaService
      .getPostgresClient()
      .serviceNode.findUnique({
        where: { id: node_id },
      });

    if (!node) {
      throw new HttpException('Node not found', HttpStatus.NOT_FOUND);
    }

    // if current node is primary then throw error

    if (node.is_primary) {
      throw new HttpException(
        'Primary node cannot be toggled. Please assign another node as primary before toggling',
        HttpStatus.BAD_REQUEST,
      );
    }

    // toggle the status of the node set active as false
    await this.prismaService.getPostgresClient().serviceNode.update({
      where: { id: node_id },
      data: {
        is_healthy: !node.active,
      },
    });

    return {
      status: HttpStatus.OK,
      success: true,
      message: 'Node status updated successfully',
    };
  }

  async toggleNodePrimary(node_id: string): Promise<AcknowledgementDto> {
    const node = await this.prismaService
      .getPostgresClient()
      .serviceNode.findUnique({
        where: { id: node_id },
      });

    if (!node) {
      throw new HttpException('Node not found', HttpStatus.NOT_FOUND);
    }

    // check the cluster mode
    const cluster = await this.prismaService
      .getPostgresClient()
      .cluster.findUnique({
        where: { id: node.cluster_id },
        include: {
          config: true,
        },
      });

    if (!cluster) {
      throw new HttpException('Cluster not found', HttpStatus.NOT_FOUND);
    }

    if (cluster.config.clusterMode === 'primary_standby') {
      // then make this node as primary and other nodes as standby
      await this.prismaService.getPostgresClient().serviceNode.updateMany({
        where: {
          cluster_id: node.cluster_id,
        },
        data: {
          is_primary: false,
        },
      });
    }

    await this.prismaService.getPostgresClient().serviceNode.update({
      where: { id: node_id },
      data: {
        is_primary: true,
      },
    });

    return {
      status: HttpStatus.OK,
      success: true,
      message: 'Node status updated successfully',
    };
  }
}
