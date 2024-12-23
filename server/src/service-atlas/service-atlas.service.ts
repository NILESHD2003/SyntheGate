import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateServiceDto } from './dto/service.dto';
import { PrismaService } from '../prisma/prisma.service';
import slugify from 'slugify';

@Injectable()
export class ServiceAtlasService {
  constructor(private readonly prismaService: PrismaService) {}

  async registerNewService(dto: CreateServiceDto) {
    //check if project is valid
    const project = await this.prismaService
      .getPostgresClient()
      .project.findUnique({
        where: { slug: dto.project_slug },
        select: { id: true, base_url: true },
      });
    if (!project) {
      throw new HttpException('Project not found', HttpStatus.NOT_FOUND);
    }
    //slugify user string
    const service_url = slugify(dto.name, {
      lower: true,
      strict: true,
      replacement: '-',
      remove: /[*+~.()'"!:@]/g,
      locale: 'en',
    });
    //save the service
    await this.prismaService.getPostgresClient().service.create({
      data: {
        project_id: project.id,
        name: dto.name,
        service_url: `${project.base_url}/${service_url}`,
        proxy_url: dto.proxy_url,
      },
    });

    return {
      status: HttpStatus.CREATED,
      success: true,
      description:
        'Service created successfully. It may take few minutes to be available.',
    };
  }

  async getServicesByProject(project_slug: string) {
    console.log(project_slug);
    const project = await this.prismaService
      .getPostgresClient()
      .project.findUnique({
        where: { slug: project_slug },
        select: { id: true, base_url: true },
      });

    const services = await this.prismaService
      .getPostgresClient()
      .service.findMany({
        where: {
          project_id: project.id,
        },
      });

    return {
      status: HttpStatus.OK,
      success: true,
      data: services,
    };
  }
}
