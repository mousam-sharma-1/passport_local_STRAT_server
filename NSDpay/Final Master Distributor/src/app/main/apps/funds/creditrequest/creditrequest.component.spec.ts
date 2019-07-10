import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditrequestComponent } from './creditrequest.component';

describe('CreditrequestComponent', () => {
  let component: CreditrequestComponent;
  let fixture: ComponentFixture<CreditrequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreditrequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreditrequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
