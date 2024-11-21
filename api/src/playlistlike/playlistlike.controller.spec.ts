import { Test, TestingModule } from '@nestjs/testing';
import { PlaylistlikeController } from './playlistlike.controller';

describe('PlaylistlikeController', () => {
  let controller: PlaylistlikeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PlaylistlikeController],
    }).compile();

    controller = module.get<PlaylistlikeController>(PlaylistlikeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
