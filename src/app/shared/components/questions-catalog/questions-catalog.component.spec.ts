import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionsCatalogComponent } from './questions-catalog.component';

describe('QuestionsCatalogComponent', () => {
  let component: QuestionsCatalogComponent;
  let fixture: ComponentFixture<QuestionsCatalogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionsCatalogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionsCatalogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
