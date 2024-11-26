import { Controller, Get, Post, Body, Param, Delete, Patch, NotFoundException } from '@nestjs/common';
import { ArtistalbumService } from './artistalbum.service';
import { CreateArtistAlbumDto } from './dto/create-artistalbum.dto';
import { UpdateArtistAlbumDto } from './dto/update-artistalbum.dto';

@Controller('artistalbums')
export class ArtistalbumController {
  constructor(private readonly artistalbumService: ArtistalbumService) {}

  @Post()
  create(@Body() createArtistAlbumDto: CreateArtistAlbumDto) {
    return this.artistalbumService.create(createArtistAlbumDto);
  }

  @Get()
  findAll() {
    return this.artistalbumService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.artistalbumService.findOne(id);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateArtistAlbumDto: UpdateArtistAlbumDto,
  ) {
    const artistalbum = await this.artistalbumService.findOne(id);
    if (!artistalbum) {
      throw new NotFoundException(`ArtistAlbum with ID ${id} not found`);
    }
  
    return this.artistalbumService.update(id, updateArtistAlbumDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.artistalbumService.remove(id);
  }
}
