import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service'; 
import { CreatePlaylistSongDto } from './dto/create-playlistsong.dto';
import { UpdatePlaylistSongDto } from './dto/update-playlistsong.dto';

@Injectable()
export class PlaylistsongService {
  constructor(private prisma: PrismaService) {}

  async create(createPlaylistSongDto: CreatePlaylistSongDto) {
    return this.prisma.playlistSong.create({
      data: createPlaylistSongDto,
    });
  }

  async findAll() {
    return this.prisma.playlistSong.findMany();
  }

  async findOne(id: string) {
    return this.prisma.playlistSong.findUnique({
      where: { id },
    });
  }

  async update(id: string, updatePlaylistSongDto: UpdatePlaylistSongDto) {
    const playlistSong = await this.prisma.playlistSong.findUnique({ where: { id } });
    try{
      return this.prisma.playlistSong.update({
        where: { id },
        data: updatePlaylistSongDto,
      });
    } catch (error) {
      throw new NotFoundException(`PlaylistSong with ID ${id} not found`);
    }
  }

  async remove(id: string) {
    return this.prisma.playlistSong.delete({
      where: { id },
    });
  }
}
