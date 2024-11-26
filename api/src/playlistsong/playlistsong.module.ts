import { Module } from '@nestjs/common';
import { PlaylistsongController } from './playlistsong.controller';
import { PlaylistsongService } from './playlistsong.service';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  imports: [],
  controllers: [PlaylistsongController],
  providers: [PlaylistsongService, PrismaService]
})
export class PlaylistsongModule {}
