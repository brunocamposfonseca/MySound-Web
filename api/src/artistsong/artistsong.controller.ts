import { Controller, Get, Post, Body, Param, Delete, Patch, NotFoundException } from '@nestjs/common';
import { ArtistSongService } from './artistsong.service';
import { CreateArtistSongDto } from './dto/create-artistsong.dto';
import { UpdateArtistSongDto } from './dto/update-artistsong.dto';

@Controller('artistsongs')
export class ArtistSongController {
  constructor(private readonly artistsongService: ArtistSongService) {}

  @Post()
  create(@Body() createArtistSongDto: CreateArtistSongDto) {
    return this.artistsongService.create(createArtistSongDto);
  }

  @Get()
  findAll() {
    return this.artistsongService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.artistsongService.findOne(id);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateArtistSongDto: UpdateArtistSongDto,
  ) {
    const artistsong = await this.artistsongService.findOne(id);
    if (!artistsong) {
      throw new NotFoundException(`ArtistSong with ID ${id} not found`);
    }
  
    return this.artistsongService.update(id, updateArtistSongDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.artistsongService.remove(id);
  }
}
