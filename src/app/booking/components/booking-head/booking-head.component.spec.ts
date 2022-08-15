import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingHeadComponent } from './booking-head.component';

describe('BookingHeadComponent', () => {
  let component: BookingHeadComponent;
  let fixture: ComponentFixture<BookingHeadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookingHeadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookingHeadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
