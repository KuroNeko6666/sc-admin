import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartDeviceComponent } from './chart-device.component';

describe('ChartDeviceComponent', () => {
  let component: ChartDeviceComponent;
  let fixture: ComponentFixture<ChartDeviceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ChartDeviceComponent]
    });
    fixture = TestBed.createComponent(ChartDeviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
