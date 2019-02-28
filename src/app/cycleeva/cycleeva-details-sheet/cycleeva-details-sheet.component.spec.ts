import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CycleevaDetailsSheetComponent } from './cycleeva-details-sheet.component';

describe('CycleevaDetailsSheetComponent', () => {
  let component: CycleevaDetailsSheetComponent;
  let fixture: ComponentFixture<CycleevaDetailsSheetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CycleevaDetailsSheetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CycleevaDetailsSheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
