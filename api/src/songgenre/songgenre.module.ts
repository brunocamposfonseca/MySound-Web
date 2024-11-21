import { Module } from '@nestjs/common';
import { SonggenreController } from './songgenre.controller';
import { SonggenreService } from './songgenre.service';

@Module({
  controllers: [SonggenreController],
  providers: [SonggenreService]
})
export class SonggenreModule {}
