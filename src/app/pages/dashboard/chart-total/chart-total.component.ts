import { Component, Inject, Input, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardService } from 'src/app/core/services';
import { IDevice } from 'src/app/core/model';

@Component({
  selector: 'app-chart-total',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './chart-total.component.html',
  styleUrls: ['./chart-total.component.css']
})
export class ChartTotalComponent implements OnInit {
  @Input({required: true}) device?: IDevice
  private service: DashboardService = inject(DashboardService)

  public total: number = 0

  ngOnInit(): void {

  }


}
