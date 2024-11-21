import { Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service'; 
import { CreateGenreDto } from './dto/create-genre.dto';
import { UpdateGenreDto } from './dto/update-genre.dto';

@Injectable()
export class GenreService {
  constructor(private prisma: PrismaService) {}

  async create(createGenreDto: CreateGenreDto) {
    return this.prisma.genre.create({
      data: createGenreDto,
    });
  }

  async findAll() {
    return this.prisma.genre.findMany();
  }

  async findOne(id: string) {
    return this.prisma.genre.findUnique({
      where: { id },
    });
  }

  async update(id: string, updateGenreDto: UpdateGenreDto) {
    const genre = await this.prisma.genre.findUnique({ where: { id } });
    try{
      return this.prisma.genre.update({
        where: { id },
        data: updateGenreDto,
      });
    } catch (error) {
      throw new NotFoundException(`Genre with ID ${id} not found`);
    }
  }

  async remove(id: string) {
    return this.prisma.genre.delete({
      where: { id },
    });
  }
}
