import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TakeEvaComponent } from './take-eva.component';

describe('TakeEvaComponent', () => {
  let component: TakeEvaComponent;
  let fixture: ComponentFixture<TakeEvaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TakeEvaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TakeEvaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
