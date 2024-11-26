import { Controller, Get, Post, Body, Param, Delete, Patch, NotFoundException } from '@nestjs/common';
import { PlaylistlikeService } from './playlistlike.service';
import { CreatePlaylistLikeDto } from './dto/create-playlistlike.dto';
import { UpdatePlaylistLikeDto } from './dto/update-playlistlike.dto';

@Controller('playlistlikes')
export class PlaylistlikeController {
  constructor(private readonly playlistLikeService: PlaylistlikeService) {}

  @Post()
  create(@Body() createPlaylistLikeDto: CreatePlaylistLikeDto) {
    return this.playlistLikeService.create(createPlaylistLikeDto);
  }

  @Get()
  findAll() {
    return this.playlistLikeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.playlistLikeService.findOne(id);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updatePlaylistLikeDto: UpdatePlaylistLikeDto,
  ) {
    const like = await this.playlistLikeService.findOne(id);
    if (!like) {
      throw new NotFoundException(`PlaylistLike with ID ${id} not found`);
    }
  
    return this.playlistLikeService.update(id, updatePlaylistLikeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.playlistLikeService.remove(id);
  }
}
