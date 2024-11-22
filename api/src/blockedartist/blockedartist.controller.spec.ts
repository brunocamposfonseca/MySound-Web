import { Test, TestingModule } from '@nestjs/testing';
import { BlockedartistController } from './blockedartist.controller';

describe('BlockedartistController', () => {
  let controller: BlockedartistController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BlockedartistController],
    }).compile();

    controller = module.get<BlockedartistController>(BlockedartistController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
