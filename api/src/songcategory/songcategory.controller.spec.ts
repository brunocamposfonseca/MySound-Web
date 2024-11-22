import { Test, TestingModule } from '@nestjs/testing';
import { SongcategoryController } from './songcategory.controller';

describe('SongcategoryController', () => {
  let controller: SongcategoryController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SongcategoryController],
    }).compile();

    controller = module.get<SongcategoryController>(SongcategoryController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
