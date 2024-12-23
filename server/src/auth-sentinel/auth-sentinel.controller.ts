import { Body, Controller, Post } from '@nestjs/common';
import { RegisterDto } from './dto/user.dto';
import { AuthSentinelService } from './auth-sentinel.service';

@Controller('auth-sentinel')
export class AuthSentinelController {
  constructor(private readonly authSentinelService: AuthSentinelService) {}
  @Post('login')
  async login() {
    return 'login';
  }

  @Post('register')
  async register(@Body() body: RegisterDto) {
    return await this.authSentinelService.loginHandler(body);
  }

  @Post('logout')
  async logout() {
    return 'logout';
  }

  @Post('forgot-password')
  async forgotPassword() {
    return 'forgot-password';
  }

  @Post('reset-password')
  async resetPassword() {
    return 'reset-password';
  }

  @Post('verify-email')
  async verifyEmail() {
    return 'verify-email';
  }
}
