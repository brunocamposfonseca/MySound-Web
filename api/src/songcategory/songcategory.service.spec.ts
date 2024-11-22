import { Test, TestingModule } from '@nestjs/testing';
import { SongcategoryService } from './songcategory.service';

describe('SongcategoryService', () => {
  let service: SongcategoryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SongcategoryService],
    }).compile();

    service = module.get<SongcategoryService>(SongcategoryService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
