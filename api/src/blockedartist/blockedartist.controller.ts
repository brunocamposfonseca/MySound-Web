import { Controller, Get, Post, Body, Param, Delete, Patch, NotFoundException } from '@nestjs/common';
import { BlockedService } from './blockedartist.service';
import { CreateBlockedDto } from './dto/create-blocked.dto';

@Controller('blockeds')
export class BlockedController {
  constructor(private readonly blockedService: BlockedService) {}

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
