import { Test, TestingModule } from '@nestjs/testing';
import { ArtistalbumController } from './artistalbum.controller';

describe('ArtistalbumController', () => {
  let controller: ArtistalbumController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ArtistalbumController],
    }).compile();

    controller = module.get<ArtistalbumController>(ArtistalbumController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
