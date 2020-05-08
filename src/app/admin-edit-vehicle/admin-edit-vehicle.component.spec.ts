import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminEditVehicleComponent } from './admin-edit-vehicle.component';

describe('AdminEditVehicleComponent', () => {
  let component: AdminEditVehicleComponent;
  let fixture: ComponentFixture<AdminEditVehicleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminEditVehicleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminEditVehicleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
