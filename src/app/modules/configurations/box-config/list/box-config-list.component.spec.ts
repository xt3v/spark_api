import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxConfigListComponent } from './box-config-list.component';

describe('BoxConfigListComponent', () => {
  let component: BoxConfigListComponent;
  let fixture: ComponentFixture<BoxConfigListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoxConfigListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoxConfigListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
