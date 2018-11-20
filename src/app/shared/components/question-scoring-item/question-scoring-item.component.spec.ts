import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionScoringItemComponent } from './question-scoring-item.component';

describe('QuestionScoringItemComponent', () => {
  let component: QuestionScoringItemComponent;
  let fixture: ComponentFixture<QuestionScoringItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionScoringItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionScoringItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
