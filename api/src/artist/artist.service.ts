import { Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service'; 
import { CreateArtistDto } from './dto/create-artist.dto';
import { UpdateArtistDto } from './dto/update-artist.dto';

@Injectable()
export class ArtistService {
  constructor(private prisma: PrismaService) {}

  async create(createArtistDto: CreateArtistDto) {
    return this.prisma.artist.create({
      data: createArtistDto,
    });
  }

  async findAll() {
    return this.prisma.artist.findMany();
  }

  async findOne(id: string) {
    return this.prisma.artist.findUnique({
      where: { id },
    });
  }

  async update(id: string, updateArtistDto: UpdateArtistDto) {
    const artist = await this.prisma.artist.findUnique({ where: { id } });
    try{
      return this.prisma.artist.update({
        where: { id },
        data: updateArtistDto,
      });
    } catch (error) {
      throw new NotFoundException(`Artist with ID ${id} not found`);
    }
  }

  async remove(id: string) {
    return this.prisma.artist.delete({
      where: { id },
    });
  }
}
