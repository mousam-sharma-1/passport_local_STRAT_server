import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RetailerorderComponent } from './retailerorder.component';

describe('RetailerorderComponent', () => {
  let component: RetailerorderComponent;
  let fixture: ComponentFixture<RetailerorderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RetailerorderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RetailerorderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
