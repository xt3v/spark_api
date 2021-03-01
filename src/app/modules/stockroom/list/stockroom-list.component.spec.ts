import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockroomListComponent } from './stockroom-list.component';

describe('StockroomListComponent', () => {
  let component: StockroomListComponent;
  let fixture: ComponentFixture<StockroomListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StockroomListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StockroomListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
