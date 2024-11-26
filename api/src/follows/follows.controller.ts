import { Controller, Post, Get, Param, Delete, Body } from '@nestjs/common';
import { FollowsService } from './follows.service';
import { CreateFollowDto } from './dto/create-follows.dto';

@Controller('follows')
export class FollowsController {
  constructor(private readonly followsService: FollowsService) {}

  @Post()
  async create(@Body() createFollowDto: CreateFollowDto) {
    return this.followsService.create(createFollowDto);
  }

  @Get()
  async findAll() {
    return this.followsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.followsService.findOne(id);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.followsService.remove(id);
  }
}
