import { AssociateRoutingModule } from './associate-routing.module';

describe('AssociateRoutingModule', () => {
  let associateRoutingModule: AssociateRoutingModule;

  beforeEach(() => {
    associateRoutingModule = new AssociateRoutingModule();
  });

  it('should create an instance', () => {
    expect(associateRoutingModule).toBeTruthy();
  });
});
