import { Test, TestingModule } from '@nestjs/testing';
import { typeController } from './type.controller';

describe('typeController', () => {
  let controller: typeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [typeController],
    }).compile();

    controller = module.get<typeController>(typeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
