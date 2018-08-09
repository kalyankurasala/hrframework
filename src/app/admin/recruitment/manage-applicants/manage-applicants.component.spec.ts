import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageApplicantsComponent } from './manage-applicants.component';

describe('ManageApplicantsComponent', () => {
  let component: ManageApplicantsComponent;
  let fixture: ComponentFixture<ManageApplicantsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageApplicantsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageApplicantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
