import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionEssayStatisticsComponent } from './question-essay-statistics.component';

describe('QuestionEssayStatisticsComponent', () => {
  let component: QuestionEssayStatisticsComponent;
  let fixture: ComponentFixture<QuestionEssayStatisticsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionEssayStatisticsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionEssayStatisticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
