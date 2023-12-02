import { Test, TestingModule } from '@nestjs/testing';
import { BikesAvailablesController } from './bikes-availables.controller';

describe('BikesAvailablesController', () => {
  let controller: BikesAvailablesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BikesAvailablesController],
    }).compile();

    controller = module.get<BikesAvailablesController>(
      BikesAvailablesController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
