import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAddNewUserComponent } from './admin-add-new-user.component';

describe('AdminAddNewUserComponent', () => {
  let component: AdminAddNewUserComponent;
  let fixture: ComponentFixture<AdminAddNewUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminAddNewUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminAddNewUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
