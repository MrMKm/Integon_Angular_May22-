import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoUtileriasComponent } from './demo-utilerias.component';

describe('DemoUtileriasComponent', () => {
  let component: DemoUtileriasComponent;
  let fixture: ComponentFixture<DemoUtileriasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoUtileriasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoUtileriasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
