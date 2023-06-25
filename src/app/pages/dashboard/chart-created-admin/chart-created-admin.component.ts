import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IChart, IDevice, IDeviceData } from 'src/app/core/model';
import { DashboardService } from 'src/app/core/services';
import { Status } from 'src/app/core/enum';
import { HttpClientModule, HttpParams } from '@angular/common/http';
import { NgChartsModule } from 'ng2-charts';
import { ChartConfiguration, ChartOptions } from 'chart.js';

const DATETYPE = [
  "second",
  "hour",
  "day",
  "month",
  "year",
]

@Component({
  selector: 'app-chart-created-admin',
  standalone: true,
  imports: [CommonModule, NgChartsModule, HttpClientModule],
  templateUrl: './chart-created.component.html',
  styleUrls: ['./chart-created.component.css']
})
export class ChartCreatedAdminComponent implements OnInit, OnChanges, OnDestroy {

  private service: DashboardService = inject(DashboardService)

  public chartData?: ChartConfiguration<'line'>['data']
  public chartOption: ChartOptions<'line'> = { responsive: false, animation: false };
  public chartLegend: boolean = true

  public dateType = DATETYPE
  public rawStatus = Status
  public status: Status = Status.initial
  public current: string = DATETYPE[1]
  public drawer : boolean = false
  public interval?: any

  ngOnChanges(changes: SimpleChanges): void {
    this.read()
  }

  ngOnInit(): void {
    this.read()
    this.interval = setInterval(() => this.read(), 5000)
  }

  read(): void{
    this.service.readAdmin(this.params)
    .subscribe({
      next: (res) => {
        this.setChartData(res.data)
        this.status = Status.initial
      },
      error: (err) => {
        console.log(err);
        this.status = Status.error
      }
    })
  }

  changeDate(date: string) {
    this.current = date
    this.drawerToggler()
    this.read()
  }

  setChartData(data: IChart){
    this.chartData = {
      labels: data.labels,
      datasets: [
        {
          data: data.data,
          label: "Recents Data Device"
        }
      ]
    }
  }

  get params(): HttpParams {
    let res: HttpParams = new HttpParams()
    .set("date_type", this.current ?? DATETYPE[0])
    return res
  }

  drawerToggler(){
    this.drawer = !this.drawer
  }

  ngOnDestroy(): void {
    clearInterval(this.interval)
  }

}
