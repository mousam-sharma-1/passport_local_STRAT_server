import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditdepositComponent } from './creditdeposit.component';

describe('CreditdepositComponent', () => {
  let component: CreditdepositComponent;
  let fixture: ComponentFixture<CreditdepositComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreditdepositComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreditdepositComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
