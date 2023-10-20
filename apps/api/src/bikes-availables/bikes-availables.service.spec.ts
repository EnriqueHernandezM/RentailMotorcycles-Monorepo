import { Test, TestingModule } from '@nestjs/testing';
import { BikesAvailablesService } from './bikes-availables.service';

describe('BikesAvailablesService', () => {
  let service: BikesAvailablesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BikesAvailablesService],
    }).compile();

    service = module.get<BikesAvailablesService>(BikesAvailablesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
