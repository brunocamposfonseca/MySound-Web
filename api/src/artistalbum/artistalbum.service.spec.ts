import { Test, TestingModule } from '@nestjs/testing';
import { ArtistalbumService } from './artistalbum.service';

describe('ArtistalbumService', () => {
  let service: ArtistalbumService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ArtistalbumService],
    }).compile();

    service = module.get<ArtistalbumService>(ArtistalbumService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
