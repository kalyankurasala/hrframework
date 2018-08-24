import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AtsTimelineComponent } from './ats-timeline.component';

describe('AtsTimelineComponent', () => {
  let component: AtsTimelineComponent;
  let fixture: ComponentFixture<AtsTimelineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtsTimelineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtsTimelineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
