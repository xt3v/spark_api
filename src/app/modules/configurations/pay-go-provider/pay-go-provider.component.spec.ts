import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PayGoProviderComponent } from './pay-go-provider.component';

describe('PayGoProviderComponent', () => {
  let component: PayGoProviderComponent;
  let fixture: ComponentFixture<PayGoProviderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PayGoProviderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PayGoProviderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
