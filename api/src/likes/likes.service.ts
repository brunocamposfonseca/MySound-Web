import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service'; 
import { CreateLikesDto } from './dto/create-likes.dto';

@Injectable()
export class LikesService {
  constructor(private prisma: PrismaService) {}

  async create(createLikesDto: CreateLikesDto) {
    return this.prisma.likes.create({
      data: createLikesDto,
    });
  }

  async findAll() {
    return this.prisma.likes.findMany();
  }

  async findOne(id: string) {
    return this.prisma.likes.findUnique({
      where: { id },
    });
  }

  async remove(id: string) {
    return this.prisma.likes.delete({
      where: { id },
    });
  }
}
