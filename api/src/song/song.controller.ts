import { Controller, Get, Post, Body, Param, Delete, Patch, NotFoundException } from '@nestjs/common';
import { SongService } from './song.service';
import { CreateSongDto } from './dto/create-song.dto';
import { UpdateSongDto } from './dto/update-song.dto';

@Controller('songs')
export class SongController {
  constructor(private readonly songService: SongService) {}

  @Post()
  create(@Body() createSongDto: CreateSongDto) {
    return this.songService.create(createSongDto);
  }

  @Get()
  findAll() {
    return this.songService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.songService.findOne(id);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateSongDto: UpdateSongDto,
  ) {
    const song = await this.songService.findOne(id);
    if (!song) {
      throw new NotFoundException(`Song with ID ${id} not found`);
    }
  
    return this.songService.update(id, updateSongDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.songService.remove(id);
  }
}
