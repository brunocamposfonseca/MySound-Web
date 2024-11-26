import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service'; 
import { CreateBlockedDto } from './dto/create-blocked.dto';

@Injectable()
export class BlockedartistService {
  constructor(private prisma: PrismaService) {}

  async create(createBlockedDto: CreateBlockedDto) {
    return this.prisma.blockedArtist.create({
      data: createBlockedDto,
    });
  }

  async findAll() {
    return this.prisma.blockedArtist.findMany();
  }

  async findOne(id: string) {
    return this.prisma.blockedArtist.findUnique({
      where: { id },
    });
  }

  async remove(id: string) {
    return this.prisma.blockedArtist.delete({
      where: { id },
    });
  }
}
