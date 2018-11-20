import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadingAnimationBlockComponent } from './loading-animation-block.component';

describe('LoadingAnimationBlockComponent', () => {
  let component: LoadingAnimationBlockComponent;
  let fixture: ComponentFixture<LoadingAnimationBlockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoadingAnimationBlockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadingAnimationBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
