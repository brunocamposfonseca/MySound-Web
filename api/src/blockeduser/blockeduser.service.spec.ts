import { Test, TestingModule } from '@nestjs/testing';
import { BlockeduserService } from './blockeduser.service';

describe('BlockeduserService', () => {
  let service: BlockeduserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BlockeduserService],
    }).compile();

    service = module.get<BlockeduserService>(BlockeduserService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
