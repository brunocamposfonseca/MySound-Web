import { Test, TestingModule } from '@nestjs/testing';
import { SonggenreService } from './songgenre.service';

describe('SonggenreService', () => {
  let service: SonggenreService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SonggenreService],
    }).compile();

    service = module.get<SonggenreService>(SonggenreService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
