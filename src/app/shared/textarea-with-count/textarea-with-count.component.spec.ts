import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextareaWithCountComponent } from './textarea-with-count.component';

describe('TextareaWithCountComponent', () => {
  let component: TextareaWithCountComponent;
  let fixture: ComponentFixture<TextareaWithCountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TextareaWithCountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TextareaWithCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
