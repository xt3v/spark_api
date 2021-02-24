import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddStockroomComponent } from './add-stockroom.component';

describe('AddStockroomComponent', () => {
  let component: AddStockroomComponent;
  let fixture: ComponentFixture<AddStockroomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddStockroomComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddStockroomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
