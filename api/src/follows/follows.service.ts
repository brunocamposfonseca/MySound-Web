import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateFollowDto } from './dto/create-follows.dto';
import { FollowedType } from './dto/follow_enum';

@Injectable()
export class FollowsService {
  constructor(private prisma: PrismaService) {}
  async create(createFollowDto: CreateFollowDto) {
    const { followerId, followedId, followedType } = createFollowDto;

    // Verifique se o seguidor existe
    const followerExists = await this.prisma.user.findUnique({
      where: { id: followerId },
    });
    if (!followerExists) {
      throw new NotFoundException(`Follower with ID ${followerId} does not exist.`);
    }

    // Validação do followedType usando o enum
    if (![FollowedType.User, FollowedType.Artist].includes(followedType as FollowedType)) {
      throw new BadRequestException('Invalid followedType. It should be "User" or "Artist".');
    }

    // Verifique se o seguido existe com base no tipo
    if (followedType === FollowedType.User) {
      const followedUserExists = await this.prisma.user.findUnique({
        where: { id: followedId },
      });
      if (!followedUserExists) {
        throw new NotFoundException(`User with ID ${followedId} does not exist.`);
      }
    } else if (followedType === FollowedType.Artist) {
      const followedArtistExists = await this.prisma.artist.findUnique({
        where: { id: followedId },
      });
      if (!followedArtistExists) {
        throw new NotFoundException(`Artist with ID ${followedId} does not exist.`);
      }
    }

    // Verifique se o follow já existe
    const existingFollow = await this.prisma.follows.findFirst({
      where: { followerId, followedId, followedType },
    });

    if (existingFollow) {
      throw new BadRequestException('Follow already exists.');
    }

    // Crie o registro
    return this.prisma.follows.create({
      data: createFollowDto,
    });
  }

  async findAll() {
    return this.prisma.follows.findMany();
  }

  async findOne(id: string) {
    const follow = await this.prisma.follows.findUnique({
      where: { id },
    });

    if (!follow) {
      throw new NotFoundException(`Follow with ID ${id} not found`);
    }

    return follow;
  }

  async remove(id: string) {
    const follow = await this.prisma.follows.findUnique({
      where: { id },
    });

    if (!follow) {
      throw new NotFoundException(`Follow with ID ${id} not found`);
    }

    return this.prisma.follows.delete({
      where: { id },
    });
  }
}
