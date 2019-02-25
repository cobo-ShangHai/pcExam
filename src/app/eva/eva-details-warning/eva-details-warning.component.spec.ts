import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EvaDetailsWarningComponent } from './eva-details-warning.component';

describe('EvaDetailsWarningComponent', () => {
  let component: EvaDetailsWarningComponent;
  let fixture: ComponentFixture<EvaDetailsWarningComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EvaDetailsWarningComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EvaDetailsWarningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
