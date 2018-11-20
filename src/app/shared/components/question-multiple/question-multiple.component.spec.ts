import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionMultipleComponent } from './question-multiple.component';

describe('QuestionMultipleComponent', () => {
  let component: QuestionMultipleComponent;
  let fixture: ComponentFixture<QuestionMultipleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionMultipleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionMultipleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
