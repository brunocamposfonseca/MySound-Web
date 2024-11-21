import { Test, TestingModule } from '@nestjs/testing';
import { SonggenreController } from './songgenre.controller';

describe('SonggenreController', () => {
  let controller: SonggenreController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SonggenreController],
    }).compile();

    controller = module.get<SonggenreController>(SonggenreController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
