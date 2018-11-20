import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionScoringStatisticsComponent } from './question-scoring-statistics.component';

describe('QuestionScoringStatisticsComponent', () => {
  let component: QuestionScoringStatisticsComponent;
  let fixture: ComponentFixture<QuestionScoringStatisticsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionScoringStatisticsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionScoringStatisticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
