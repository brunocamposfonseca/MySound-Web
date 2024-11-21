import { Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service'; 
import { CreatePlaylistDto } from './dto/create-playlist.dto';
import { UpdatePlaylistDto } from './dto/update-playlist.dto';

@Injectable()
export class PlaylistService {
  constructor(private prisma: PrismaService) {}

  async create(createPlaylistDto: CreatePlaylistDto) {
    return this.prisma.playlist.create({
      data: createPlaylistDto,
    });
  }

  async findAll() {
    return this.prisma.playlist.findMany();
  }

  async findOne(id: string) {
    return this.prisma.playlist.findUnique({
      where: { id },
    });
  }

  async update(id: string, updatePlaylistDto: UpdatePlaylistDto) {
    const playlist = await this.prisma.playlist.findUnique({ where: { id } });
    try{
      return this.prisma.playlist.update({
        where: { id },
        data: updatePlaylistDto,
      });
    } catch (error) {
      throw new NotFoundException(`Playlist with ID ${id} not found`);
    }
  }

  async remove(id: string) {
    return this.prisma.playlist.delete({
      where: { id },
    });
  }
}
