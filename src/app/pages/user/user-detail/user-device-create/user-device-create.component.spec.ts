import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDeviceCreateComponent } from './user-device-create.component';

describe('UserDeviceCreateComponent', () => {
  let component: UserDeviceCreateComponent;
  let fixture: ComponentFixture<UserDeviceCreateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [UserDeviceCreateComponent]
    });
    fixture = TestBed.createComponent(UserDeviceCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
