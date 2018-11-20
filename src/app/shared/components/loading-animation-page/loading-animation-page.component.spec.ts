import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadingAnimationPageComponent } from './loading-animation-page.component';

describe('LoadingAnimationPageComponent', () => {
  let component: LoadingAnimationPageComponent;
  let fixture: ComponentFixture<LoadingAnimationPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoadingAnimationPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadingAnimationPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
