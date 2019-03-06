import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VoteQuestionNopicItemComponent } from './vote-question-nopic-item.component';

describe('VoteQuestionNopicItemComponent', () => {
  let component: VoteQuestionNopicItemComponent;
  let fixture: ComponentFixture<VoteQuestionNopicItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VoteQuestionNopicItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VoteQuestionNopicItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
