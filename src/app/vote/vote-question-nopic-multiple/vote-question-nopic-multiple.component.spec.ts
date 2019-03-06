import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VoteQuestionNopicMultipleComponent } from './vote-question-nopic-multiple.component';

describe('VoteQuestionNopicMultipleComponent', () => {
  let component: VoteQuestionNopicMultipleComponent;
  let fixture: ComponentFixture<VoteQuestionNopicMultipleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VoteQuestionNopicMultipleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VoteQuestionNopicMultipleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
