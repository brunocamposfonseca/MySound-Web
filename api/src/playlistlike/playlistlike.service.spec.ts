import { Test, TestingModule } from '@nestjs/testing';
import { PlaylistlikeService } from './playlistlike.service';

describe('PlaylistlikeService', () => {
  let service: PlaylistlikeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PlaylistlikeService],
    }).compile();

    service = module.get<PlaylistlikeService>(PlaylistlikeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
