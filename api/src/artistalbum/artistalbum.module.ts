import { Module } from '@nestjs/common';
import { ArtistalbumController } from './artistalbum.controller';
import { ArtistalbumService } from './artistalbum.service';

@Module({
  controllers: [ArtistalbumController],
  providers: [ArtistalbumService]
})
export class ArtistalbumModule {}
