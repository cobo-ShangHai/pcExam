import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TakeCycleevaComponent } from './take-cycleeva.component';

describe('TakeCycleevaComponent', () => {
  let component: TakeCycleevaComponent;
  let fixture: ComponentFixture<TakeCycleevaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TakeCycleevaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TakeCycleevaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
