import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminEditPaymentComponent } from './admin-edit-payment.component';

describe('AdminEditPaymentComponent', () => {
  let component: AdminEditPaymentComponent;
  let fixture: ComponentFixture<AdminEditPaymentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminEditPaymentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminEditPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
