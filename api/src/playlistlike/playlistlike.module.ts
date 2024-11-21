import { Module } from '@nestjs/common';
import { PlaylistlikeController } from './playlistlike.controller';
import { PlaylistlikeService } from './playlistlike.service';

@Module({
  controllers: [PlaylistlikeController],
  providers: [PlaylistlikeService]
})
export class PlaylistlikeModule {}
