import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecruitmentAtsComponent } from './recruitment-ats.component';

describe('RecruitmentAtsComponent', () => {
  let component: RecruitmentAtsComponent;
  let fixture: ComponentFixture<RecruitmentAtsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecruitmentAtsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecruitmentAtsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
