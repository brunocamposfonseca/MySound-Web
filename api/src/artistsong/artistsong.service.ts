import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service'; 
import { CreateArtistSongDto } from './dto/create-artistsong.dto';
import { UpdateArtistSongDto } from './dto/update-artistsong.dto';

@Injectable()
export class ArtistsongService {
  constructor(private prisma: PrismaService) {}

  async create(createArtistSongDto: CreateArtistSongDto) {
    return this.prisma.artistSong.create({
      data: createArtistSongDto,
    });
  }

  async findAll() {
    return this.prisma.artistSong.findMany();
  }

  async findOne(id: string) {
    return this.prisma.artistSong.findUnique({
      where: { id },
    });
  }

  async update(id: string, updateArtistSongDto: UpdateArtistSongDto) {
    const artistalbum = await this.prisma.artistSong.findUnique({ where: { id } });
    try{
      return this.prisma.artistSong.update({
        where: { id },
        data: updateArtistSongDto,
      });
    } catch (error) {
      throw new NotFoundException(`ArtistSong with ID ${id} not found`);
    }
  }

  async remove(id: string) {
    return this.prisma.artistSong.delete({
      where: { id },
    });
  }
}
