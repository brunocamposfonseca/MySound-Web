import { Module } from '@nestjs/common';
import { SongcategoryController } from './songcategory.controller';
import { SongcategoryService } from './songcategory.service';

@Module({
  controllers: [SongcategoryController],
  providers: [SongcategoryService]
})
export class SongcategoryModule {}
