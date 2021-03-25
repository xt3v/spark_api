import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KitConfigListComponent } from './kit-config-list.component';

describe('KitConfigListComponent', () => {
  let component: KitConfigListComponent;
  let fixture: ComponentFixture<KitConfigListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KitConfigListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KitConfigListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
