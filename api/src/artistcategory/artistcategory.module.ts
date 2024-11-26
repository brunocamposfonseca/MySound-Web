import { Module } from '@nestjs/common';
import { ArtistcategoryController } from './artistcategory.controller';
import { ArtistcategoryService } from './artistcategory.service';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  imports: [],
  controllers: [ArtistcategoryController],
  providers: [ArtistcategoryService, PrismaService]
})
export class ArtistcategoryModule {}
