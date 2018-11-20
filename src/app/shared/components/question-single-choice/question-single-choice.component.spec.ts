import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionSingleChoiceComponent } from './question-single-choice.component';

describe('QuestionSingleChoiceComponent', () => {
  let component: QuestionSingleChoiceComponent;
  let fixture: ComponentFixture<QuestionSingleChoiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionSingleChoiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionSingleChoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
