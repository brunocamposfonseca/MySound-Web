// src/user/user.service.ts
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service'; // Verifique o caminho correto para o PrismaService
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  // Criar usuário
  async create(createUserDto: CreateUserDto) {
    return this.prisma.user.create({
      data: createUserDto,
    });
  }

  // Buscar todos os usuários
  async findAll() {
    return this.prisma.user.findMany();
  }

  // Buscar um usuário por ID
  async findOne(id: string) {
    return this.prisma.user.findUnique({
      where: { id },
    });
  }

  // Atualizar usuário
  async update(id: string, updateUserDto: UpdateUserDto) {
    return this.prisma.user.update({
      where: { id },
      data: updateUserDto,
    });
  }

  // Deletar usuário
  async remove(id: string) {
    return this.prisma.user.delete({
      where: { id },
    });
  }
}
