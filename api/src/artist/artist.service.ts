import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service'; // Verifique o caminho correto para o PrismaService
import { CreateArtistDto } from './dto/create-artist.dto';
import { UpdateArtistDto } from './dto/update-artist.dto';

@Injectable()
export class ArtistService {
  constructor(private prisma: PrismaService) {}

  // Criar usuário
  async create(createArtistDto: CreateArtistDto) {
    return this.prisma.artist.create({
      data: createArtistDto,
    });
  }

  // Buscar todos os usuários
  async findAll() {
    return this.prisma.artist.findMany();
  }

  // Buscar um usuário por ID
  async findOne(id: string) {
    return this.prisma.artist.findUnique({
      where: { id },
    });
  }

  // Atualizar usuário
  async update(id: string, updateArtistDto: UpdateArtistDto) {
    return this.prisma.artist.update({
      where: { id },
      data: updateArtistDto,
    });
  }

  // Deletar usuário
  async remove(id: string) {
    return this.prisma.artist.delete({
      where: { id },
    });
  }
}
