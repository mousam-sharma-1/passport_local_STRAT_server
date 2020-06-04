import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashTransparentComponent } from './dash-transparent.component';

describe('DashTransparentComponent', () => {
  let component: DashTransparentComponent;
  let fixture: ComponentFixture<DashTransparentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashTransparentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashTransparentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
