import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VoteQuestionItemComponent } from './vote-question-item.component';

describe('VoteQuestionItemComponent', () => {
  let component: VoteQuestionItemComponent;
  let fixture: ComponentFixture<VoteQuestionItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VoteQuestionItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VoteQuestionItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
