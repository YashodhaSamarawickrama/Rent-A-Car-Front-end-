import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAddNewReservationComponent } from './admin-add-new-reservation.component';

describe('AdminAddNewReservationComponent', () => {
  let component: AdminAddNewReservationComponent;
  let fixture: ComponentFixture<AdminAddNewReservationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminAddNewReservationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminAddNewReservationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
