import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamDetailsListComponent } from './exam-details-list.component';

describe('ExamDetailsListComponent', () => {
  let component: ExamDetailsListComponent;
  let fixture: ComponentFixture<ExamDetailsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExamDetailsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExamDetailsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
