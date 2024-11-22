import { Test, TestingModule } from '@nestjs/testing';
import { ArtistcategoryController } from './artistcategory.controller';

describe('ArtistcategoryController', () => {
  let controller: ArtistcategoryController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ArtistcategoryController],
    }).compile();

    controller = module.get<ArtistcategoryController>(ArtistcategoryController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
