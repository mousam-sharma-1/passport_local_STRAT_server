import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditDepositComponent } from './credit-deposit.component';

describe('CreditDepositComponent', () => {
  let component: CreditDepositComponent;
  let fixture: ComponentFixture<CreditDepositComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreditDepositComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreditDepositComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
