import { Module } from '@nestjs/common';
import { ArtistsongController } from './artistsong.controller';
import { ArtistsongService } from './artistsong.service';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  imports: [],
  controllers: [ArtistsongController],
  providers: [ArtistsongService, PrismaService]
})
export class ArtistsongModule {}
