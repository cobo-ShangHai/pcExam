import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VoteQuestionSingleComponent } from './vote-question-single.component';

describe('VoteQuestionSingleComponent', () => {
  let component: VoteQuestionSingleComponent;
  let fixture: ComponentFixture<VoteQuestionSingleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VoteQuestionSingleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VoteQuestionSingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
