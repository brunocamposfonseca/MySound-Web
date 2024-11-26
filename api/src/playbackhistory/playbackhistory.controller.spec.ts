import { Test, TestingModule } from '@nestjs/testing';
import { PlaybackhistoryController } from './playbackhistory.controller';

describe('PlaybackhistoryController', () => {
  let controller: PlaybackhistoryController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PlaybackhistoryController],
    }).compile();

    controller = module.get<PlaybackhistoryController>(PlaybackhistoryController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
