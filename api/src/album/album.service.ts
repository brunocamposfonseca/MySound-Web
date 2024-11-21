import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service'; 
import { CreateAlbumDto } from './dto/create-album.dto';
import { UpdateAlbumDto } from './dto/update-album.dto';

@Injectable()
export class AlbumService {
  constructor(private prisma: PrismaService) {}

  async create(createAlbumDto: CreateAlbumDto) {
    return this.prisma.album.create({
      data: createAlbumDto,
    });
  }

  async findAll() {
    return this.prisma.album.findMany();
  }

  async findOne(id: string) {
    return this.prisma.album.findUnique({
      where: { id },
    });
  }

  async update(id: string, updateAlbumDto: UpdateAlbumDto) {
    const album = await this.prisma.album.findUnique({ where: { id } });
    try{
      return this.prisma.album.update({
        where: { id },
        data: updateAlbumDto,
      });
    } catch (error) {
      throw new NotFoundException(`Album with ID ${id} not found`);
    }
  }

  async remove(id: string) {
    return this.prisma.album.delete({
      where: { id },
    });
  }
}
