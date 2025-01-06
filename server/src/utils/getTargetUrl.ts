import { PrismaService } from '../prisma/prisma.service';

export class GetTargetUrl {
  constructor(private readonly prismaService: PrismaService) {}

  async findTargetUrlBySubdomainAndService(
    sub_domain: string,
    cluster_slug: string,
  ) {
    const cluster = await this.prismaService
      .getPostgresClient()
      .cluster.findUnique({
        where: {
          cluster_url: `${sub_domain}.localhost:9000/${cluster_slug}`,
        },
        include: {
          nodes: true,
        },
      });

    if (!cluster) {
      return null;
    }

    const activeNode = cluster.nodes.filter((node) => node.active);

    return activeNode[0].proxy_url;
  }
}
