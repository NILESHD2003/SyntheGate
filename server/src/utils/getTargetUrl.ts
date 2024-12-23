import { PrismaService } from '../prisma/prisma.service';

export class GetTargetUrl {
  constructor(private readonly prismaService: PrismaService) {}

  async findTargetUrlBySubdomainAndService(
    sub_domain: string,
    service_name: string,
  ) {
    const project = await this.prismaService
      .getPostgresClient()
      .project.findUnique({
        where: { slug: sub_domain },
        include: {
          services: true,
        },
      });

    if (!project) {
      return null;
    }

    const service = project.services.filter(
      (service) => service.service_url === `${sub_domain}.localhost:9000/${service_name}`
    );

    return service[0].proxy_url;
  }
}
