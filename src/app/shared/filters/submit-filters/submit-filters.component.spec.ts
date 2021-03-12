import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmitFiltersComponent } from './submit-filters.component';

describe('SubmitFiltersComponent', () => {
  let component: SubmitFiltersComponent;
  let fixture: ComponentFixture<SubmitFiltersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubmitFiltersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubmitFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
