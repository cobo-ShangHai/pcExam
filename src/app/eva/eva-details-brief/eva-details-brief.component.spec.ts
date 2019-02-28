import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EvaDetailsBriefComponent } from './eva-details-brief.component';

describe('EvaDetailsBriefComponent', () => {
  let component: EvaDetailsBriefComponent;
  let fixture: ComponentFixture<EvaDetailsBriefComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EvaDetailsBriefComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EvaDetailsBriefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
