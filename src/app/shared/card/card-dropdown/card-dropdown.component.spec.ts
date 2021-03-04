import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardDropdownComponent } from './card-dropdown.component';

describe('CardDropdownComponent', () => {
  let component: CardDropdownComponent;
  let fixture: ComponentFixture<CardDropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardDropdownComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
