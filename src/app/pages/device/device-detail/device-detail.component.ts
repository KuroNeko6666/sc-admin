import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeviceService } from 'src/app/core/services';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Status } from 'src/app/core/enum';
import { IDevice } from 'src/app/core/model';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-device-detail',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './device-detail.component.html',
  styleUrls: ['./device-detail.component.css']
})
export class DeviceDetailComponent implements OnInit {

  private service: DeviceService = inject(DeviceService)
  private active: ActivatedRoute = inject(ActivatedRoute)
  private router: Router = inject(Router)
  public status: Status = Status.initial
  public device?: IDevice

  ngOnInit(): void {
    this.active.params.subscribe(params => {
      this.find(params["id"] ?? "")
    })
  }

  find(id: string){
    this.status = Status.loading
    this.service.find(id).subscribe({
      next: (res) => {
        console.log(res);

        this.device = res.data
        this.status = Status.initial
      },
      error: (err) => {
        console.log(err);
        this.status = Status.error
      },
    })
  }

  back() {
    this.router.navigateByUrl('/device/list')
  }


}
