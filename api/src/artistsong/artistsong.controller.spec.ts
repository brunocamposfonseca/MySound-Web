import { Test, TestingModule } from '@nestjs/testing';
import { ArtistsongController } from './artistsong.controller';

describe('ArtistsongController', () => {
  let controller: ArtistsongController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ArtistsongController],
    }).compile();

    controller = module.get<ArtistsongController>(ArtistsongController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
