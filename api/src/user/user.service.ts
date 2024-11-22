import { Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service'; 
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import * as bcrypt from 'bcrypt';


@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async create(createUserDto: CreateUserDto) {
    const hashedPassword = await bcrypt.hash(createUserDto.password, 10);
    const userData = { ...createUserDto, password: hashedPassword };
    return this.prisma.user.create({
      data: userData,
    });
  }

  async findAll() {
    return this.prisma.user.findMany({
      include: {
        likes: {
          select: {
            songId: true,
            AddedAt: true
          }
        },
        blockedArtists: {
          select: {
            artistId: true,
            blockedAt: true
          }
        },
        follows: {},
        followedBy: {},
        PlaybackHistory: {
          select: {
            songId: true,
            playedAt: true,
            currentTime: true,
          }
        },
        playlistLikes: {
          select: {
            likedAt: true,
            playlistId: true
          }
        },
        playlists: {}
      }});
  }

  async findOne(id: string) {
    return this.prisma.user.findUnique({
      where: { id },
      include: {
        likes: {
          select: {
            songId: true,
            AddedAt: true
          }
        },
        blockedArtists: {
          select: {
            artistId: true,
            blockedAt: true
          }
        },
        follows: {},
        followedBy: {},
        PlaybackHistory: {
          select: {
            songId: true,
            playedAt: true,
            currentTime: true,
          }
        },
        playlistLikes: {
          select: {
            likedAt: true,
            playlistId: true
          }
        },
        playlists: {}
      }
    });
  }

  async login(email: string, password: string) {
    const user = await this.prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      throw new NotFoundException('User not found');
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      throw new UnauthorizedException('Invalid email or password');
    }

    const { password: _, ...userWithoutPassword } = user;
    return userWithoutPassword;
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    const user = await this.prisma.user.findUnique({ where: { id } });
    try{
      if (updateUserDto.password) {
        updateUserDto.password = await bcrypt.hash(updateUserDto.password, 10);
      }
      return this.prisma.user.update({
        where: { id },
        data: updateUserDto,
      });
    } catch (error) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }
  }

  async remove(id: string) {
    return this.prisma.user.delete({
      where: { id },
    });
  }
}
