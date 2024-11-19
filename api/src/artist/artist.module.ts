import { Module } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { ArtistController } from './artist.controller';
import { ArtistService } from './artist.service';

@Module({
  imports: [],
  controllers: [ArtistController],
  providers: [ArtistService, PrismaService],
})
export class ArtistModule {}