import { Controller, Get, Post, Body, Param, Delete, Patch, NotFoundException } from '@nestjs/common';
import { ArtistCategoryService } from './artistcategory.service';
import { CreateArtistCategoryDto } from './dto/create-artistcategory.dto';
import { UpdateArtistCategoryDto } from './dto/update-artistcategory.dto';

@Controller('artistcategories')
export class ArtistCategoryController {
  constructor(private readonly artistcategoryService: ArtistCategoryService) {}

  @Post()
  create(@Body() createArtistCategoryDto: CreateArtistCategoryDto) {
    return this.artistcategoryService.create(createArtistCategoryDto);
  }

  @Get()
  findAll() {
    return this.artistcategoryService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.artistcategoryService.findOne(id);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateArtistCategoryDto: UpdateArtistCategoryDto,
  ) {
    const artistcategory = await this.artistcategoryService.findOne(id);
    if (!artistcategory) {
      throw new NotFoundException(`ArtistCategory with ID ${id} not found`);
    }
  
    return this.artistcategoryService.update(id, updateArtistCategoryDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.artistcategoryService.remove(id);
  }
}
