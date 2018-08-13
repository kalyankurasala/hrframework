import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlignmentLayoutComponent } from './alignment-layout.component';

describe('AlignmentLayoutComponent', () => {
  let component: AlignmentLayoutComponent;
  let fixture: ComponentFixture<AlignmentLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlignmentLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlignmentLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
