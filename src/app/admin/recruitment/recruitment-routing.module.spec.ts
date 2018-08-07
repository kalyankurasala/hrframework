import { RecruitmentRoutingModule } from './recruitment-routing.module';

describe('RecruitmentRoutingModule', () => {
  let recruitmentRoutingModule: RecruitmentRoutingModule;

  beforeEach(() => {
    recruitmentRoutingModule = new RecruitmentRoutingModule();
  });

  it('should create an instance', () => {
    expect(recruitmentRoutingModule).toBeTruthy();
  });
});
