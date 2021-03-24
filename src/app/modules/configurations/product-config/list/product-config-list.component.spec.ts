import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductConfigListComponent } from './product-config-list.component';

describe('ProductConfigListComponent', () => {
  let component: ProductConfigListComponent;
  let fixture: ComponentFixture<ProductConfigListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductConfigListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductConfigListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
