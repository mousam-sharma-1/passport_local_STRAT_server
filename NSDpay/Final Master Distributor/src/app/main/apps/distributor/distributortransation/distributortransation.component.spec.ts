import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DistributortransationComponent } from './distributortransation.component';

describe('DistributortransationComponent', () => {
  let component: DistributortransationComponent;
  let fixture: ComponentFixture<DistributortransationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DistributortransationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DistributortransationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
