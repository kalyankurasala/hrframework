import { AluminiModule } from './alumini.module';

describe('AluminiModule', () => {
  let aluminiModule: AluminiModule;

  beforeEach(() => {
    aluminiModule = new AluminiModule();
  });

  it('should create an instance', () => {
    expect(aluminiModule).toBeTruthy();
  });
});
