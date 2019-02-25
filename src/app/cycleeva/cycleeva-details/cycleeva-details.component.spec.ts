import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CycleevaDetailsComponent } from './cycleeva-details.component';

describe('CycleevaDetailsComponent', () => {
  let component: CycleevaDetailsComponent;
  let fixture: ComponentFixture<CycleevaDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CycleevaDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CycleevaDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
