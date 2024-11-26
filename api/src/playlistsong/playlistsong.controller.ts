import { Controller, Get, Post, Body, Param, Delete, Patch, NotFoundException } from '@nestjs/common';
import { PlaylistsongService } from './playlistsong.service';
import { CreatePlaylistSongDto } from './dto/create-playlistsong.dto';
import { UpdatePlaylistSongDto } from './dto/update-playlistsong.dto';

@Controller('playlistsongs')
export class PlaylistsongController {
  constructor(private readonly playlistSongService: PlaylistsongService) {}

  @Post()
  create(@Body() createPlaylistSongDto: CreatePlaylistSongDto) {
    return this.playlistSongService.create(createPlaylistSongDto);
  }

  @Get()
  findAll() {
    return this.playlistSongService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.playlistSongService.findOne(id);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updatePlaylistSongDto: UpdatePlaylistSongDto,
  ) {
    const song = await this.playlistSongService.findOne(id);
    if (!song) {
      throw new NotFoundException(`PlaylistSong with ID ${id} not found`);
    }
  
    return this.playlistSongService.update(id, updatePlaylistSongDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.playlistSongService.remove(id);
  }
}
