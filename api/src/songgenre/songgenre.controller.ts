import { Controller, Get, Post, Body, Param, Delete, Patch, NotFoundException } from '@nestjs/common';
import { SongGenreService } from './songgenre.service';
import { CreateSongGenreDto } from './dto/create-songgenre.dto';
import { UpdateSongGenreDto } from './dto/update-songgenre.dto';

@Controller('songgenres')
export class SongGenreController {
  constructor(private readonly songGenreService: SongGenreService) {}

  @Post()
  create(@Body() createSongGenreDto: CreateSongGenreDto) {
    return this.songGenreService.create(createSongGenreDto);
  }

  @Get()
  findAll() {
    return this.songGenreService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.songGenreService.findOne(id);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateSongGenreDto: UpdateSongGenreDto,
  ) {
    const song = await this.songGenreService.findOne(id);
    if (!song) {
      throw new NotFoundException(`SongGenre with ID ${id} not found`);
    }
  
    return this.songGenreService.update(id, updateSongGenreDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.songGenreService.remove(id);
  }
}
