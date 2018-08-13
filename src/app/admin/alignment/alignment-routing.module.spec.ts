import { AlignmentRoutingModule } from './alignment-routing.module';

describe('AlignmentRoutingModule', () => {
  let alignmentRoutingModule: AlignmentRoutingModule;

  beforeEach(() => {
    alignmentRoutingModule = new AlignmentRoutingModule();
  });

  it('should create an instance', () => {
    expect(alignmentRoutingModule).toBeTruthy();
  });
});
