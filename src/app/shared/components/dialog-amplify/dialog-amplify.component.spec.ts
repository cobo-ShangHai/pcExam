import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAmplifyComponent } from './dialog-amplify.component';

describe('DialogAmplifyComponent', () => {
  let component: DialogAmplifyComponent;
  let fixture: ComponentFixture<DialogAmplifyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogAmplifyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogAmplifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
