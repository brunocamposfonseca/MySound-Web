import { Test, TestingModule } from '@nestjs/testing';
import { PlaybackhistoryService } from './playbackhistory.service';

describe('PlaybackhistoryService', () => {
  let service: PlaybackhistoryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PlaybackhistoryService],
    }).compile();

    service = module.get<PlaybackhistoryService>(PlaybackhistoryService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
