import { Test, TestingModule } from '@nestjs/testing';
import { BlockedartistService } from './blockedartist.service';

describe('BlockedartistService', () => {
  let service: BlockedartistService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BlockedartistService],
    }).compile();

    service = module.get<BlockedartistService>(BlockedartistService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
