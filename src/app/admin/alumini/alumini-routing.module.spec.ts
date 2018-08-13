import { AluminiRoutingModule } from './alumini-routing.module';

describe('AluminiRoutingModule', () => {
  let aluminiRoutingModule: AluminiRoutingModule;

  beforeEach(() => {
    aluminiRoutingModule = new AluminiRoutingModule();
  });

  it('should create an instance', () => {
    expect(aluminiRoutingModule).toBeTruthy();
  });
});
