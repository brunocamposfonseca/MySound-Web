import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service'; 
import { CreateSongDto } from './dto/create-song.dto';
import { UpdateSongDto } from './dto/update-song.dto';

@Injectable()
export class SongService {
  constructor(private prisma: PrismaService) {}

  async create(createSongDto: CreateSongDto) {
    return this.prisma.song.create({
      data: createSongDto,
    });
  }

  async findAll() {
    return this.prisma.song.findMany();
  }

  async findOne(id: string) {
    return this.prisma.song.findUnique({
      where: { id },
    });
  }

  async update(id: string, updateSongDto: UpdateSongDto) {
    const song = await this.prisma.song.findUnique({ where: { id } });
    try{
      return this.prisma.song.update({
        where: { id },
        data: updateSongDto,
      });
    } catch (error) {
      throw new NotFoundException(`Song with ID ${id} not found`);
    }
  }

  async remove(id: string) {
    return this.prisma.song.delete({
      where: { id },
    });
  }
}
