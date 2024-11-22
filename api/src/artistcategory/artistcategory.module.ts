import { Module } from '@nestjs/common';
import { ArtistcategoryController } from './artistcategory.controller';
import { ArtistcategoryService } from './artistcategory.service';

@Module({
  controllers: [ArtistcategoryController],
  providers: [ArtistcategoryService]
})
export class ArtistcategoryModule {}
