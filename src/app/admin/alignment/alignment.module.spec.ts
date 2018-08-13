import { AlignmentModule } from './alignment.module';

describe('AlignmentModule', () => {
  let alignmentModule: AlignmentModule;

  beforeEach(() => {
    alignmentModule = new AlignmentModule();
  });

  it('should create an instance', () => {
    expect(alignmentModule).toBeTruthy();
  });
});
