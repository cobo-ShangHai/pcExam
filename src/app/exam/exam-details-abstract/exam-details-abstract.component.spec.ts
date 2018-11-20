import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamDetailsAbstractComponent } from './exam-details-abstract.component';

describe('ExamDetailsAbstractComponent', () => {
  let component: ExamDetailsAbstractComponent;
  let fixture: ComponentFixture<ExamDetailsAbstractComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExamDetailsAbstractComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExamDetailsAbstractComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
