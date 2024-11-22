import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service'; 
import { CreateArtistCategoryDto } from './dto/create-artistcategory.dto';
import { UpdateArtistCategoryDto } from './dto/update-artistcategory.dto';

@Injectable()
export class ArtistCategoryService {
  constructor(private prisma: PrismaService) {}

  async create(createArtistCategoryDto: CreateArtistCategoryDto) {
    return this.prisma.artistCategory.create({
      data: createArtistCategoryDto,
    });
  }

  async findAll() {
    return this.prisma.artistCategory.findMany();
  }

  async findOne(id: string) {
    return this.prisma.artistCategory.findUnique({
      where: { id },
    });
  }

  async update(id: string, updateArtistCategoryDto: UpdateArtistCategoryDto) {
    const artistalbum = await this.prisma.artistCategory.findUnique({ where: { id } });
    try{
      return this.prisma.artistCategory.update({
        where: { id },
        data: updateArtistCategoryDto,
      });
    } catch (error) {
      throw new NotFoundException(`ArtistCategory with ID ${id} not found`);
    }
  }

  async remove(id: string) {
    return this.prisma.artistCategory.delete({
      where: { id },
    });
  }
}
