import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CycleevaDetailsBriefComponent } from './cycleeva-details-brief.component';

describe('CycleevaDetailsBriefComponent', () => {
  let component: CycleevaDetailsBriefComponent;
  let fixture: ComponentFixture<CycleevaDetailsBriefComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CycleevaDetailsBriefComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CycleevaDetailsBriefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
