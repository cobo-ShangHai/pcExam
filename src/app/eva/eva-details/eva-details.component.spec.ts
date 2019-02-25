import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EvaDetailsComponent } from './eva-details.component';

describe('EvaDetailsComponent', () => {
  let component: EvaDetailsComponent;
  let fixture: ComponentFixture<EvaDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EvaDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EvaDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
