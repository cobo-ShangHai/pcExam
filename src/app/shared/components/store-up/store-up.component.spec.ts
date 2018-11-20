import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreUpComponent } from './store-up.component';

describe('StoreUpComponent', () => {
  let component: StoreUpComponent;
  let fixture: ComponentFixture<StoreUpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoreUpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoreUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
