import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileprepaidComponent } from './mobileprepaid.component';

describe('MobileprepaidComponent', () => {
  let component: MobileprepaidComponent;
  let fixture: ComponentFixture<MobileprepaidComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MobileprepaidComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileprepaidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
