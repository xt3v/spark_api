import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MytablefilterComponent } from './mytablefilter.component';

describe('MytablefilterComponent', () => {
  let component: MytablefilterComponent;
  let fixture: ComponentFixture<MytablefilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MytablefilterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MytablefilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
