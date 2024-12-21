import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProjectForgeModule } from './project-forge/project-forge.module';
import { PrismaModule } from './prisma/prisma.module';
import { ConfigModule } from '@nestjs/config';
import { APP_FILTER } from '@nestjs/core';
import { GlobalExceptionFilter } from './filters/global-exception.filter';
import { RouteMasterModule } from './route-master/route-master.module';
import { ServiceAtlasModule } from './service-atlas/service-atlas.module';
import { AuthSentinelModule } from './auth-sentinel/auth-sentinel.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    ProjectForgeModule,
    PrismaModule,
    RouteMasterModule,
    ServiceAtlasModule,
    AuthSentinelModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    { provide: APP_FILTER, useClass: GlobalExceptionFilter },
  ],
})
export class AppModule {}
