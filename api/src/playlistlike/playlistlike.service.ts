import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service'; 
import { CreatePlaylistLikeDto } from './dto/create-playlistlike.dto';
import { UpdatePlaylistLikeDto } from './dto/update-playlistlike.dto';

@Injectable()
export class PlaylistlikeService {
  constructor(private prisma: PrismaService) {}

  async create(createPlaylistLikeDto: CreatePlaylistLikeDto) {
    return this.prisma.playlistLike.create({
      data: createPlaylistLikeDto,
    });
  }

  async findAll() {
    return this.prisma.playlistLike.findMany();
  }

  async findOne(id: string) {
    return this.prisma.playlistLike.findUnique({
      where: { id },
    });
  }

  async update(id: string, updatePlaylistLikeDto: UpdatePlaylistLikeDto) {
    const playlistLike = await this.prisma.playlistLike.findUnique({ where: { id } });
    try{
      return this.prisma.playlistLike.update({
        where: { id },
        data: updatePlaylistLikeDto,
      });
    } catch (error) {
      throw new NotFoundException(`PlaylistLike with ID ${id} not found`);
    }
  }

  async remove(id: string) {
    return this.prisma.playlistLike.delete({
      where: { id },
    });
  }
}
