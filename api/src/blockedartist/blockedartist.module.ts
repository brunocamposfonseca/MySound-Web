import { Module } from '@nestjs/common';
import { BlockedartistController } from './blockedartist.controller';
import { BlockedartistService } from './blockedartist.service';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  imports: [],
  controllers: [BlockedartistController],
  providers: [BlockedartistService, PrismaService]
})
export class BlockedartistModule {}
