import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CycleevaDetailsWarningComponent } from './cycleeva-details-warning.component';

describe('CycleevaDetailsWarningComponent', () => {
  let component: CycleevaDetailsWarningComponent;
  let fixture: ComponentFixture<CycleevaDetailsWarningComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CycleevaDetailsWarningComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CycleevaDetailsWarningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
