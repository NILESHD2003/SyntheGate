import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import * as httpProxy from 'http-proxy';
import { GetTargetUrl } from '../utils/getTargetUrl';
import { Logger } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class SubdomainServiceMiddleware implements NestMiddleware {
  private proxy = httpProxy.createProxyServer();
  private logger = new Logger(SubdomainServiceMiddleware.name);
  private getTargetUrl = new GetTargetUrl(new PrismaService());

  async use(req: Request, res: Response, next: NextFunction) {
    const host = req.headers.host || '';
    const subdomain = host.split('.')[0];

    this.logger.log(
      `Incoming request: ${req.method} ${req.originalUrl} from ${req.ip} at ${new Date().toISOString()}`,
    );

    console.log(req.originalUrl);

    if (subdomain && host.includes('.')) {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const [_, serviceName, ...restPath] = req.originalUrl.split('/');
      const path = restPath.join('/');

      console.log(`${subdomain} - ${serviceName} - ${path}`);

      try {
        const targetUrl =
          await this.getTargetUrl.findTargetUrlBySubdomainAndService(
            subdomain,
            serviceName,
          );

        if (!targetUrl) {
          this.logger.warn(
            `Service not found for subdomain "${subdomain}" and service "${serviceName}"`,
          );
          return res
            .status(404)
            .send('Service not found. Service may be inactive.');
        }

        const proxyTarget = `${targetUrl}/${path}`;

        // Log outgoing request details
        this.logger.log(`Outgoing request to: ${proxyTarget}`);
        this.logger.log(`Request Headers: ${JSON.stringify(req.headers)}`);
        this.logger.log(`Request Method: ${req.method}`);
        this.logger.log(`Request Body: ${JSON.stringify(req.body)}`);

        // Proxy the request to the target URL
        this.proxy.web(
          req,
          res,
          { target: proxyTarget, secure: false },
          (err) => {
            if (err) {
              this.logger.error(`Proxy error: ${err.message}`);
              res.status(500).send('Error occurred while proxying.');
            }
          },
        );

        // Optional: You can track response details after the proxying has occurred
        res.on('finish', () => {
          // Log the response status code and data size after proxying
          const dataSize = Buffer.byteLength(res.locals.body || ''); // Approximate response size
          this.logger.log(`Response Status: ${res.statusCode}`);
          this.logger.log(`Response Data Size: ${dataSize} bytes`);
        });
      } catch (err) {
        this.logger.error(`Error fetching target URL: ${err.message}`);
        res.status(500).send('Internal Server Error.');
      }
    } else {
      this.logger.log(
        `Handling internal API request: ${req.method} ${req.originalUrl}`,
      );
      next();
    }
  }
}
