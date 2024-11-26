import { Module } from '@nestjs/common';
import { PlaybackhistoryController } from './playbackhistory.controller';
import { PlaybackhistoryService } from './playbackhistory.service';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  imports: [],
  controllers: [PlaybackhistoryController],
  providers: [PlaybackhistoryService, PrismaService]
})
export class PlaybackhistoryModule {}
