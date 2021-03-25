import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KitConfigComponent } from './kit-config.component';

describe('KitConfigComponent', () => {
  let component: KitConfigComponent;
  let fixture: ComponentFixture<KitConfigComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KitConfigComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KitConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
