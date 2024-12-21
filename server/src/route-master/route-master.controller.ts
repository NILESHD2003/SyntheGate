import { Controller, Get, Req } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Controller('')
export class RouteMasterController {
  constructor(private readonly prismaService: PrismaService) {}

  @Get()
  async getRouting(@Req() req) {
    const subdomain = req.headers.host?.split('.')[0];

    const projectData = await this.prismaService
      .getPostgresClient()
      .project.findUnique({ where: { slug: subdomain } });

    return {
      message: 'Please wait while we route your request',
      data: projectData,
    };
  }
}
