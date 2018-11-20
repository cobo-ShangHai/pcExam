import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionFillGapComponent } from './question-fill-gap.component';

describe('QuestionFillGapComponent', () => {
  let component: QuestionFillGapComponent;
  let fixture: ComponentFixture<QuestionFillGapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionFillGapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionFillGapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
