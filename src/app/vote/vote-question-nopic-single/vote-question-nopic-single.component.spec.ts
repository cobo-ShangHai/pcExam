import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VoteQuestionNopicSingleComponent } from './vote-question-nopic-single.component';

describe('VoteQuestionNopicSingleComponent', () => {
  let component: VoteQuestionNopicSingleComponent;
  let fixture: ComponentFixture<VoteQuestionNopicSingleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VoteQuestionNopicSingleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VoteQuestionNopicSingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
