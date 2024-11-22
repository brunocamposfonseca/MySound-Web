import { Test, TestingModule } from '@nestjs/testing';
import { ArtistcategoryService } from './artistcategory.service';

describe('ArtistcategoryService', () => {
  let service: ArtistcategoryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ArtistcategoryService],
    }).compile();

    service = module.get<ArtistcategoryService>(ArtistcategoryService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
