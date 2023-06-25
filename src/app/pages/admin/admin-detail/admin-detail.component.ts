import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { Status } from 'src/app/core/enum';
import { IDevice } from 'src/app/core/model';
import { DeviceService } from 'src/app/core/services';
import { AdminService } from 'src/app/core/services/admin.service';
import { IAdmin } from 'src/app/core/model/admin.model';

@Component({
  selector: 'app-admin-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './admin-detail.component.html',
  styleUrls: ['./admin-detail.component.css']
})
export class AdminDetailComponent {
  private service: AdminService = inject(AdminService)
  private active: ActivatedRoute = inject(ActivatedRoute)
  private router: Router = inject(Router)
  public status: Status = Status.initial
  public admin?: IAdmin

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

        this.admin = res.data
        this.status = Status.initial
      },
      error: (err) => {
        console.log(err);
        this.status = Status.error
      },
    })
  }

  back() {
    this.router.navigateByUrl('/admin/list')
  }
}
