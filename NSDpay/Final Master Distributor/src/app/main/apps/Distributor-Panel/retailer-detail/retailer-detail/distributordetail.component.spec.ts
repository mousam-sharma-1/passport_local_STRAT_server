import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DistributordetailComponent } from './distributordetail.component';

describe('DistributordetailComponent', () => {
  let component: DistributordetailComponent;
  let fixture: ComponentFixture<DistributordetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DistributordetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DistributordetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
