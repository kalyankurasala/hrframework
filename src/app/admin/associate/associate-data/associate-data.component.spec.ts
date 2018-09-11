import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssociateDataComponent } from './associate-data.component';

describe('AssociateDataComponent', () => {
  let component: AssociateDataComponent;
  let fixture: ComponentFixture<AssociateDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssociateDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssociateDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
