import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionScoringComponent } from './question-scoring.component';

describe('QuestionScoringComponent', () => {
  let component: QuestionScoringComponent;
  let fixture: ComponentFixture<QuestionScoringComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionScoringComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionScoringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
