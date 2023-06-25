import { Component, Input, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpParams } from '@angular/common/http';
import { Status } from 'src/app/core/enum';
import { IDevice } from 'src/app/core/model';
import { DeviceService } from 'src/app/core/services';

@Component({
  selector: 'app-chart-device',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './chart-device.component.html',
  styleUrls: ['./chart-device.component.css']
})
export class ChartDeviceComponent {

  private service: DeviceService = inject(DeviceService)

  public rawStatus = Status
  public status: Status = Status.loading
  public devices?: IDevice[]

  ngOnInit(): void {
    this.getList()
  }

  getList() {
    this.status = Status.loading
    this.service.read(this.params).subscribe({
      next: (res) => {
        this.devices = res.data
        this.status = Status.initial
      },
      error: (err) => {
        this.status = Status.error
        console.log(err);
      }
    })
  }

  private get params(): HttpParams {
    return new HttpParams()
      .set("page", 1)
      .append("limit", 5)
  }


}
