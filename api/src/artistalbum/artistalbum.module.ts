import { Module } from '@nestjs/common';
import { ArtistalbumController } from './artistalbum.controller';
import { ArtistalbumService } from './artistalbum.service';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  imports: [],
  controllers: [ArtistalbumController],
  providers: [ArtistalbumService, PrismaService]
})
export class ArtistalbumModule {}
