import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeviceDetailComponent } from './device-detail.component';
import { RouterTestingModule } from "@angular/router/testing";


describe('DeviceDetailComponent', () => {
  let component: DeviceDetailComponent;
  let fixture: ComponentFixture<DeviceDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [DeviceDetailComponent, RouterTestingModule]
    });
    fixture = TestBed.createComponent(DeviceDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
