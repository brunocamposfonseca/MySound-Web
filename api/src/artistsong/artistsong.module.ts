import { Module } from '@nestjs/common';
import { ArtistsongController } from './artistsong.controller';
import { ArtistsongService } from './artistsong.service';

@Module({
  controllers: [ArtistsongController],
  providers: [ArtistsongService]
})
export class ArtistsongModule {}
