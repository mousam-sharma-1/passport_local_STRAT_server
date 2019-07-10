import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileDiscountComponent } from './mobile-discount.component';

describe('MobileDiscountComponent', () => {
  let component: MobileDiscountComponent;
  let fixture: ComponentFixture<MobileDiscountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MobileDiscountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileDiscountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
