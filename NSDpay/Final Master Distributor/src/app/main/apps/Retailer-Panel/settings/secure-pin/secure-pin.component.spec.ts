import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecurePinComponent } from './secure-pin.component';

describe('SecurePinComponent', () => {
  let component: SecurePinComponent;
  let fixture: ComponentFixture<SecurePinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecurePinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecurePinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
