import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAddNewVehicleComponent } from './admin-add-new-vehicle.component';

describe('AdminAddNewVehicleComponent', () => {
  let component: AdminAddNewVehicleComponent;
  let fixture: ComponentFixture<AdminAddNewVehicleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminAddNewVehicleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminAddNewVehicleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
