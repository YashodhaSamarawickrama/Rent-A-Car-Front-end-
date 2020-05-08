import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAddNewPaymentComponent } from './admin-add-new-payment.component';

describe('AdminAddNewPaymentComponent', () => {
  let component: AdminAddNewPaymentComponent;
  let fixture: ComponentFixture<AdminAddNewPaymentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminAddNewPaymentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminAddNewPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
