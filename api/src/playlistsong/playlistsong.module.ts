import { Module } from '@nestjs/common';
import { PlaylistsongController } from './playlistsong.controller';
import { PlaylistsongService } from './playlistsong.service';

@Module({
  controllers: [PlaylistsongController],
  providers: [PlaylistsongService]
})
export class PlaylistsongModule {}
