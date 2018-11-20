import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionEssayComponent } from './question-essay.component';

describe('QuestionEssayComponent', () => {
  let component: QuestionEssayComponent;
  let fixture: ComponentFixture<QuestionEssayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionEssayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionEssayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
