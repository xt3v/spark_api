import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PriceGroupListComponent } from './price-group-list.component';

describe('PriceGroupListComponent', () => {
  let component: PriceGroupListComponent;
  let fixture: ComponentFixture<PriceGroupListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PriceGroupListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PriceGroupListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
