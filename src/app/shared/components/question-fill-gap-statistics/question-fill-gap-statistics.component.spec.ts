import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionFillGapStatisticsComponent } from './question-fill-gap-statistics.component';

describe('QuestionFillGapStatisticsComponent', () => {
  let component: QuestionFillGapStatisticsComponent;
  let fixture: ComponentFixture<QuestionFillGapStatisticsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionFillGapStatisticsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionFillGapStatisticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
