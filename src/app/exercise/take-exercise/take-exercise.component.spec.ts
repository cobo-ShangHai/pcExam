import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TakeExerciseComponent } from './take-exercise.component';

describe('TakeExerciseComponent', () => {
  let component: TakeExerciseComponent;
  let fixture: ComponentFixture<TakeExerciseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TakeExerciseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TakeExerciseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
