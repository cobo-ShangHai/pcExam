import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VoteQuestionMultipleComponent } from './vote-question-multiple.component';

describe('VoteQuestionMultipleComponent', () => {
  let component: VoteQuestionMultipleComponent;
  let fixture: ComponentFixture<VoteQuestionMultipleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VoteQuestionMultipleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VoteQuestionMultipleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
