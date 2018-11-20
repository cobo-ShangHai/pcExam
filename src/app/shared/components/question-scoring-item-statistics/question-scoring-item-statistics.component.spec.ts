import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionScoringItemStatisticsComponent } from './question-scoring-item-statistics.component';

describe('QuestionScoringItemStatisticsComponent', () => {
  let component: QuestionScoringItemStatisticsComponent;
  let fixture: ComponentFixture<QuestionScoringItemStatisticsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionScoringItemStatisticsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionScoringItemStatisticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
