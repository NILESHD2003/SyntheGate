import { Module } from '@nestjs/common';
import { RouteMasterController } from './route-master.controller';
import { RouteMasterService } from './route-master.service';

@Module({
  controllers: [RouteMasterController],
  providers: [RouteMasterService],
})
export class RouteMasterModule {}
