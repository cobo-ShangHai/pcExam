import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScoreItemComponent } from './score-item.component';

describe('ScoreItemComponent', () => {
  let component: ScoreItemComponent;
  let fixture: ComponentFixture<ScoreItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScoreItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScoreItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
