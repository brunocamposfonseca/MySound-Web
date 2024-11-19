import { Module } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { SongController } from './song.controller';
import { SongService } from './song.service';

@Module({
  imports: [],
  controllers: [SongController],
  providers: [SongService, PrismaService],
})
export class SongModule {}