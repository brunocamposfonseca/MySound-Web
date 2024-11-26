import { Test, TestingModule } from '@nestjs/testing';
import { BlockeduserController } from './blockeduser.controller';

describe('BlockeduserController', () => {
  let controller: BlockeduserController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BlockeduserController],
    }).compile();

    controller = module.get<BlockeduserController>(BlockeduserController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
