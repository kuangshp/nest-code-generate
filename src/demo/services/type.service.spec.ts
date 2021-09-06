import { Test, TestingModule } from '@nestjs/testing';
import { typeService } from './type.service';

describe('typeService', () => {
  let service: typeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [typeService],
    }).compile();

    service = module.get<typeService>(typeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
