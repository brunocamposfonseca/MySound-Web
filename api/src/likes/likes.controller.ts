import { Controller, Get, Post, Body, Param, Delete, Patch, NotFoundException } from '@nestjs/common';
import { LikesService } from './likes.service';
import { CreateLikesDto } from './dto/create-likes.dto';

@Controller('likess')
export class LikesController {
  constructor(private readonly likesService: LikesService) {}

  @Post()
  create(@Body() createLikesDto: CreateLikesDto) {
    return this.likesService.create(createLikesDto);
  }

  @Get()
  findAll() {
    return this.likesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.likesService.findOne(id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.likesService.remove(id);
  }
}
