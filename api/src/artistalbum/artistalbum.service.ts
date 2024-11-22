import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service'; 
import { CreateArtistAlbumDto } from './dto/create-artistalbum.dto';
import { UpdateArtistAlbumDto } from './dto/update-artistalbum.dto';

@Injectable()
export class ArtistAlbumService {
  constructor(private prisma: PrismaService) {}

  async create(createArtistAlbumDto: CreateArtistAlbumDto) {
    return this.prisma.artistAlbum.create({
      data: createArtistAlbumDto,
    });
  }

  async findAll() {
    return this.prisma.artistAlbum.findMany();
  }

  async findOne(id: string) {
    return this.prisma.artistAlbum.findUnique({
      where: { id },
    });
  }

  async update(id: string, updateArtistAlbumDto: UpdateArtistAlbumDto) {
    const artistalbum = await this.prisma.artistAlbum.findUnique({ where: { id } });
    try{
      return this.prisma.artistAlbum.update({
        where: { id },
        data: updateArtistAlbumDto,
      });
    } catch (error) {
      throw new NotFoundException(`ArtistAlbum with ID ${id} not found`);
    }
  }

  async remove(id: string) {
    return this.prisma.artistAlbum.delete({
      where: { id },
    });
  }
}
