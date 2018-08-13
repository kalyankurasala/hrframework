import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AluminiLayoutComponent } from './alumini-layout.component';

describe('AluminiLayoutComponent', () => {
  let component: AluminiLayoutComponent;
  let fixture: ComponentFixture<AluminiLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AluminiLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AluminiLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
