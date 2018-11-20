import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionChoiceStatisticsComponent } from './question-choice-statistics.component';

describe('QuestionChoiceStatisticsComponent', () => {
  let component: QuestionChoiceStatisticsComponent;
  let fixture: ComponentFixture<QuestionChoiceStatisticsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionChoiceStatisticsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionChoiceStatisticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
