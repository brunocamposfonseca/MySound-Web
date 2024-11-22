import { Controller, Get, Post, Body, Param, Delete, Patch, NotFoundException } from '@nestjs/common';
import { SongCategoryService } from './songcategory.service';
import { CreateSongCategoryDto } from './dto/create-songcategory.dto';
import { UpdateSongCategoryDto } from './dto/update-songcategory.dto';

@Controller('songcatgories')
export class SongCategoryController {
  constructor(private readonly songCategoryService: SongCategoryService) {}

  @Post()
  create(@Body() createSongCategoryDto: CreateSongCategoryDto) {
    return this.songCategoryService.create(createSongCategoryDto);
  }

  @Get()
  findAll() {
    return this.songCategoryService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.songCategoryService.findOne(id);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateSongCategoryDto: UpdateSongCategoryDto,
  ) {
    const song = await this.songCategoryService.findOne(id);
    if (!song) {
      throw new NotFoundException(`SongCategory with ID ${id} not found`);
    }
  
    return this.songCategoryService.update(id, updateSongCategoryDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.songCategoryService.remove(id);
  }
}
