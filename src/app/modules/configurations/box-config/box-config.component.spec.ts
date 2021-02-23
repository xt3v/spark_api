import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxConfigComponent } from './box-config.component';

describe('BoxConfigComponent', () => {
  let component: BoxConfigComponent;
  let fixture: ComponentFixture<BoxConfigComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoxConfigComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoxConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
