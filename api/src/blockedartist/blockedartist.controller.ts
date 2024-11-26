import { Controller, Get, Post, Body, Param, Delete, Patch, NotFoundException } from '@nestjs/common';
import { BlockedartistService } from './blockedartist.service';
import { CreateBlockedDto } from './dto/create-blocked.dto';

@Controller('blockeds')
export class BlockedartistController {
  constructor(private readonly blockedService: BlockedartistService) {}

  @Post()
  create(@Body() createBlockedDto: CreateBlockedDto) {
    return this.blockedService.create(createBlockedDto);
  }

  @Get()
  findAll() {
    return this.blockedService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.blockedService.findOne(id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.blockedService.remove(id);
  }
}
