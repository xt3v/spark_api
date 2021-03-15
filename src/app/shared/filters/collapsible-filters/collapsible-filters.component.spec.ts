import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollapsibleFiltersComponent } from './collapsible-filters.component';

describe('CollapsibleFiltersComponent', () => {
  let component: CollapsibleFiltersComponent;
  let fixture: ComponentFixture<CollapsibleFiltersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CollapsibleFiltersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CollapsibleFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
