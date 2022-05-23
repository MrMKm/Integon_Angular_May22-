import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LregisterComponent } from './lregister.component';

describe('LregisterComponent', () => {
  let component: LregisterComponent;
  let fixture: ComponentFixture<LregisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LregisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LregisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
