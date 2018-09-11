import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssociateTabBandComponent } from './associate-tab-band.component';

describe('AssociateTabBandComponent', () => {
  let component: AssociateTabBandComponent;
  let fixture: ComponentFixture<AssociateTabBandComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssociateTabBandComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssociateTabBandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
