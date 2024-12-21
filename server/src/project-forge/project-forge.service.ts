import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { generateSlug } from 'random-word-slugs';

import { PrismaService } from '../prisma/prisma.service';

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

    const url = `https://localhost:9000/${slug}`;

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
}
