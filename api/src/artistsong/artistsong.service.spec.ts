import { Test, TestingModule } from '@nestjs/testing';
import { ArtistsongService } from './artistsong.service';

describe('ArtistsongService', () => {
  let service: ArtistsongService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ArtistsongService],
    }).compile();

    service = module.get<ArtistsongService>(ArtistsongService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
