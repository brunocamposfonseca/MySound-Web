import { Module } from '@nestjs/common';
import { PlaylistlikeController } from './playlistlike.controller';
import { PlaylistlikeService } from './playlistlike.service';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  imports: [],
  controllers: [PlaylistlikeController],
  providers: [PlaylistlikeService, PrismaService]
})
export class PlaylistlikeModule {}
