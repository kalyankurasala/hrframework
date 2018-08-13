import { CultureRoutingModule } from './culture-routing.module';

describe('CultureRoutingModule', () => {
  let cultureRoutingModule: CultureRoutingModule;

  beforeEach(() => {
    cultureRoutingModule = new CultureRoutingModule();
  });

  it('should create an instance', () => {
    expect(cultureRoutingModule).toBeTruthy();
  });
});
