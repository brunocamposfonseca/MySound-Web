import { Module } from '@nestjs/common';
import { SonggenreController } from './songgenre.controller';
import { SonggenreService } from './songgenre.service';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  imports: [],
  controllers: [SonggenreController],
  providers: [SonggenreService, PrismaService]
})
export class SonggenreModule {}
