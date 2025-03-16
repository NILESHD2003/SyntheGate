import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { generateSlug } from 'random-word-slugs';
import { PrismaService } from '../prisma/prisma.service';
import slugify from 'slugify';
import {
  CreateClusterConfigDto,
  GetProjectConfigQueryDto,
  GetProjectConfigsQueryDto,
} from './dto/clusterConfig.dto';

@Injectable()
export class ProjectForgeService {
  constructor(private readonly prismaService: PrismaService) {}

  async createProject({
    name,
    description,
  }: {
    name: string;
    description: string;
  }) {
    let slug = generateSlug(3);

    while (
      await this.prismaService
        .getPostgresClient()
        .project.findUnique({ select: { slug: true }, where: { slug } })
    ) {
      slug = generateSlug(3);
    }

    const url = `${slug}.localhost:9000`;

    await this.prismaService.getPostgresClient().project.create({
      data: {
        name,
        description,
        slug,
        base_url: url,
        owner_id: 'testOwner',
      },
    });

    return {
      status: HttpStatus.CREATED,
      success: true,
      description: 'Project created successfully',
    };
  }

  async getProjects(userId: string) {
    const projects = await this.prismaService
      .getPostgresClient()
      .project.findMany({
        where: {
          owner_id: userId,
        },
        include: {
          clusters: true,
        },
      });

    return {
      status: HttpStatus.OK,
      success: true,
      data: projects,
    };
  }

  async getProject(slug: string, userId: string) {
    const project = await this.prismaService
      .getPostgresClient()
      .project.findUnique({
        where: {
          slug: slug,
          owner_id: userId,
        },
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
      data: project,
    };
  }

  async createClusterConfig(body: CreateClusterConfigDto) {
    const project = await this.prismaService
      .getPostgresClient()
      .project.findUnique({
        where: { slug: body.project_slug },
        select: { id: true },
      });

    if (!project) {
      throw new HttpException('Project not found', HttpStatus.NOT_FOUND);
    }

    const configSlug = slugify(body.name, {
      lower: true,
      strict: true,
      replacement: '-',
      remove: /[*+~.()'"!:@]/g,
      locale: 'en',
    });

    //check if same config exists in same project
    const existingConfig = await this.prismaService
      .getPostgresClient()
      .clusterConfig.findFirst({
        where: {
          project_id: project.id,
          config_slug: configSlug,
        },
      });

    if (existingConfig) {
      throw new HttpException(
        'Cluster config already exists',
        HttpStatus.CONFLICT,
      );
    }

    await this.prismaService.getPostgresClient().clusterConfig.create({
      data: {
        name: body.name,
        config_slug: configSlug,
        project_id: project.id,
        clusterMode: body.clusterMode || 'primary_standby',
        load_balancing_type: body.load_balancing_type || 'none',
        health_check_interval: body.health_check_interval || 900,
        failover_enabled: body.failover_enabled || true,
      },
    });

    return {
      status: HttpStatus.CREATED,
      success: true,
      message: 'Cluster config created successfully',
    };
  }

  async getAllConfigs(query: GetProjectConfigsQueryDto) {
    const project = await this.prismaService
      .getPostgresClient()
      .project.findFirst({
        where: {
          slug: query.project_slug,
        },
        select: {
          id: true,
        },
      });

    if (!project) {
      throw new HttpException('Project not found', HttpStatus.NOT_FOUND);
    }

    const configs = await this.prismaService
      .getPostgresClient()
      .clusterConfig.findMany({
        where: {
          project_id: project.id,
        },
        select: {
          name: true,
          config_slug: true,
          clusterMode: true,
          load_balancing_type: true,
          health_check_interval: true,
          failover_enabled: true,
          clusters: {
            select: {
              name: true,
              cluster_slug: true,
            },
          },
        },
      });

    return {
      status: HttpStatus.OK,
      success: true,
      data: configs,
    };
  }

  async getConfig(query: GetProjectConfigQueryDto) {
    const project = await this.prismaService
      .getPostgresClient()
      .project.findFirst({
        where: {
          slug: query.project_slug,
        },
        select: {
          id: true,
        },
      });

    if (!project) {
      throw new HttpException('Project not found', HttpStatus.NOT_FOUND);
    }

    const config = await this.prismaService
      .getPostgresClient()
      .clusterConfig.findFirst({
        where: {
          project_id: project.id,
          config_slug: query.config_slug,
        },
        select: {
          name: true,
          config_slug: true,
          clusterMode: true,
          load_balancing_type: true,
          health_check_interval: true,
          failover_enabled: true,
          clusters: {
            select: {
              name: true,
              cluster_slug: true,
            },
          },
        },
      });

    if (!config) {
      throw new HttpException('Config not found', HttpStatus.NOT_FOUND);
    }

    return {
      status: HttpStatus.OK,
      success: true,
      data: config,
    };
  }

  async updateConfig(params, body) {
    const project = await this.prismaService
      .getPostgresClient()
      .project.findFirst({
        where: {
          slug: params.project_slug,
        },
        select: {
          id: true,
        },
      });

    if (!project) {
      throw new HttpException('Project not found', HttpStatus.NOT_FOUND);
    }

    const config = await this.prismaService
      .getPostgresClient()
      .clusterConfig.findFirst({
        where: {
          project_id: project.id,
          config_slug: params.config_slug,
        },
      });

    if (!config) {
      throw new HttpException('Config not found', HttpStatus.NOT_FOUND);
    }

    const data = {
      ...(body.clusterMode !== undefined && { clusterMode: body.clusterMode }),
      ...(body.load_balancing_type !== undefined && {
        load_balancing_type: body.load_balancing_type,
      }),
      ...(body.health_check_interval !== undefined && {
        health_check_interval: body.health_check_interval,
      }),
      ...(body.failover_enabled !== undefined && {
        failover_enabled: body.failover_enabled,
      }),
    };

    console.log(data);

    await this.prismaService.getPostgresClient().clusterConfig.update({
      where: {
        id: config.id,
      },
      data,
    });

    return {
      status: HttpStatus.OK,
      success: true,
      message: 'Cluster config updated successfully',
    };
  }

  async deleteConfig(params) {
    const project = await this.prismaService
      .getPostgresClient()
      .project.findFirst({
        where: {
          slug: params.project_slug,
        },
        select: {
          id: true,
        },
      });

    if (!project) {
      throw new HttpException('Project not found', HttpStatus.NOT_FOUND);
    }

    const config = await this.prismaService
      .getPostgresClient()
      .clusterConfig.findFirst({
        where: {
          project_id: project.id,
          config_slug: params.config_slug,
        },
        select: {
          id: true,
          clusters: true,
        },
      });

    if (!config) {
      throw new HttpException('Config not found', HttpStatus.NOT_FOUND);
    }

    if (config.clusters.length > 0) {
      throw new HttpException(
        'Cannot delete config with associated clusters',
        HttpStatus.CONFLICT,
      );
    }

    await this.prismaService.getPostgresClient().clusterConfig.delete({
      where: {
        id: config.id,
      },
    });

    return {
      status: HttpStatus.OK,
      success: true,
      message: 'Cluster config deleted successfully',
    };
  }
}
