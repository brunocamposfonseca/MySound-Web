import { Module } from '@nestjs/common';
import { SongcategoryController } from './songcategory.controller';
import { SongcategoryService } from './songcategory.service';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  imports: [],
  controllers: [SongcategoryController],
  providers: [SongcategoryService, PrismaService]
})
export class SongcategoryModule {}
