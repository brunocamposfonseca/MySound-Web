import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service'; 
import { CreateSongCategoryDto } from './dto/create-songcategory.dto';
import { UpdateSongCategoryDto } from './dto/update-songcategory.dto';

@Injectable()
export class SongCategoryService {
  constructor(private prisma: PrismaService) {}

  async create(createSongCategoryDto: CreateSongCategoryDto) {
    return this.prisma.songCategory.create({
      data: createSongCategoryDto,
    });
  }

  async findAll() {
    return this.prisma.songCategory.findMany();
  }

  async findOne(id: string) {
    return this.prisma.songCategory.findUnique({
      where: { id },
    });
  }

  async update(id: string, updateSongCategoryDto: UpdateSongCategoryDto) {
    const songCategory = await this.prisma.songCategory.findUnique({ where: { id } });
    try{
      return this.prisma.songCategory.update({
        where: { id },
        data: updateSongCategoryDto,
      });
    } catch (error) {
      throw new NotFoundException(`SongCategory with ID ${id} not found`);
    }
  }

  async remove(id: string) {
    return this.prisma.songCategory.delete({
      where: { id },
    });
  }
}
