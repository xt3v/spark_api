import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicFormsItemComponent } from './dynamic-forms-item.component';

describe('DynamicFormsItemComponent', () => {
  let component: DynamicFormsItemComponent;
  let fixture: ComponentFixture<DynamicFormsItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DynamicFormsItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicFormsItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
