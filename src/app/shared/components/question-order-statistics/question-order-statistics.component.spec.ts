import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionOrderStatisticsComponent } from './question-order-statistics.component';

describe('QuestionOrderStatisticsComponent', () => {
  let component: QuestionOrderStatisticsComponent;
  let fixture: ComponentFixture<QuestionOrderStatisticsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionOrderStatisticsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionOrderStatisticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
