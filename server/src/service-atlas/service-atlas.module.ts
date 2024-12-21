import { Module } from '@nestjs/common';
import { ServiceAtlasController } from './service-atlas.controller';
import { ServiceAtlasService } from './service-atlas.service';

@Module({
  controllers: [ServiceAtlasController],
  providers: [ServiceAtlasService],
})
export class ServiceAtlasModule {}
