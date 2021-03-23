import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PayGoProviderListComponent } from './pay-go-provider-list.component';

describe('PayGoProviderListComponent', () => {
  let component: PayGoProviderListComponent;
  let fixture: ComponentFixture<PayGoProviderListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PayGoProviderListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PayGoProviderListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
