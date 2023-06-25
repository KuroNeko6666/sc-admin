import { CommonModule } from '@angular/common';
import { HttpClientModule, HttpParams } from '@angular/common/http';
import { Component, OnInit, inject } from '@angular/core';
import { Status } from 'src/app/core/enum';
import { IDevice } from 'src/app/core/model';
import { DeviceService } from 'src/app/core/services';
import { HomeComponent } from 'src/app/shared/layouts/home/home.component';
import { ChartCreatedComponent } from './chart-created/chart-created.component';
import { ChartDeviceComponent } from './chart-device/chart-device.component';
import { ChartTotalComponent } from './chart-total/chart-total.component';
import { ChartCreatedAdminComponent } from './chart-created-admin/chart-created-admin.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    HttpClientModule,
    ChartTotalComponent,
    ChartCreatedComponent,
    ChartDeviceComponent,
    HomeComponent,
    ChartCreatedAdminComponent
  ],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  private service: DeviceService = inject(DeviceService)

  public rawStatus = Status
  public status: Status = Status.initial
  public device?: IDevice
  public devices?: IDevice[]
  public drawer: boolean = false;

  ngOnInit(): void {

  }

  changeDevice(device: IDevice) {
    this.device = device
    this.drawerToggler()
  }

  drawerToggler(){
    this.drawer = !this.drawer
  }

  private get params(): HttpParams {
    return new HttpParams()
      .set("page", 1)
      .append("limit", 10)
      .append("search", "")
  }


}
