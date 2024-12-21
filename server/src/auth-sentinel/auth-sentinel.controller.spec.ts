import { Test, TestingModule } from '@nestjs/testing';
import { AuthSentinelController } from './auth-sentinel.controller';

describe('AuthSentinelController', () => {
  let controller: AuthSentinelController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AuthSentinelController],
    }).compile();

    controller = module.get<AuthSentinelController>(AuthSentinelController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
