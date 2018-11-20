import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionOrderComponent } from './question-order.component';

describe('QuestionOrderComponent', () => {
  let component: QuestionOrderComponent;
  let fixture: ComponentFixture<QuestionOrderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionOrderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
