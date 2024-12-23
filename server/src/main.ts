import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('SyntheGate')
    .setDescription('The SyntheGate API description')
    .setVersion('1.0.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup('api', app, document);

  // Log all registered routes
  // const server = app.getHttpAdapter();
  // server.getHttpServer().on('listening', () => {
  //   console.log(
  //     'Routes:',
  //     app
  //       .getHttpServer()
  //       ._events.request._router.stack.filter((r) => r.route)
  //       .map((r) => ({
  //         path: r.route.path,
  //         method: Object.keys(r.route.methods)[0].toUpperCase(),
  //       })),
  //   );
  // });

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
    }),
  );

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();

// docker run --name synthegate-postgres -e POSTGRES_USER=root -e POSTGRES_PASSWORD=admin -e POSTGRES_DB=synthegate_data -p 5432:5432 -d postgres
// postgresql://root:admin@localhost:5432/synthegate_data
