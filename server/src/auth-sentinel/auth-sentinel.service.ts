import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { RegisterDto } from './dto/user.dto';

@Injectable()
export class AuthSentinelService {
  constructor(private readonly prismaService: PrismaService) {}

  async loginHandler(body: RegisterDto) {

  }
}
