import { Module } from '@nestjs/common';
import { AuthSentinelController } from './auth-sentinel.controller';
import { AuthSentinelService } from './auth-sentinel.service';

@Module({
  controllers: [AuthSentinelController],
  providers: [AuthSentinelService],
})
export class AuthSentinelModule {}
