import { Test, TestingModule } from '@nestjs/testing';
import { AuthSentinelService } from './auth-sentinel.service';

describe('AuthSentinelService', () => {
  let service: AuthSentinelService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AuthSentinelService],
    }).compile();

    service = module.get<AuthSentinelService>(AuthSentinelService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
