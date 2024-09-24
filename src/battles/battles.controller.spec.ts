import { Test, TestingModule } from '@nestjs/testing';
import { BattleController } from './battles.controller';

describe('BattlesController', () => {
  let controller: BattleController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BattleController],
    }).compile();

    controller = module.get<BattleController>(BattleController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
