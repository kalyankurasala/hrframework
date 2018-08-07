import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecruitmentLayoutComponent } from './recruitment-layout.component';

describe('RecruitmentLayoutComponent', () => {
  let component: RecruitmentLayoutComponent;
  let fixture: ComponentFixture<RecruitmentLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecruitmentLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecruitmentLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
