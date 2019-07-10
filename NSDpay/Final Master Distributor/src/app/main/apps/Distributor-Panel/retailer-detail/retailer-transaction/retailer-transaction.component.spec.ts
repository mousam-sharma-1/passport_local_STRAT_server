import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RetailerTransactionComponent } from './retailer-transaction.component';

describe('RetailerTransactionComponent', () => {
  let component: RetailerTransactionComponent;
  let fixture: ComponentFixture<RetailerTransactionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RetailerTransactionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RetailerTransactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
