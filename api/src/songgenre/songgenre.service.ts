import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service'; 
import { CreateSongGenreDto } from './dto/create-songgenre.dto';
import { UpdateSongGenreDto } from './dto/update-songgenre.dto';

@Injectable()
export class SonggenreService {
  constructor(private prisma: PrismaService) {}

  async create(createSongGenreDto: CreateSongGenreDto) {
    return this.prisma.songGenre.create({
      data: createSongGenreDto,
    });
  }

  async findAll() {
    return this.prisma.songGenre.findMany();
  }

  async findOne(id: string) {
    return this.prisma.songGenre.findUnique({
      where: { id },
    });
  }

  async update(id: string, updateSongGenreDto: UpdateSongGenreDto) {
    const songGenre = await this.prisma.songGenre.findUnique({ where: { id } });
    try{
      return this.prisma.songGenre.update({
        where: { id },
        data: updateSongGenreDto,
      });
    } catch (error) {
      throw new NotFoundException(`SongGenre with ID ${id} not found`);
    }
  }

  async remove(id: string) {
    return this.prisma.songGenre.delete({
      where: { id },
    });
  }
}
