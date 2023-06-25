import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { Status } from 'src/app/core/enum';
import { IDevice, IPage, IParam, IUser } from 'src/app/core/model';
import { DeviceService } from 'src/app/core/services';
import { AdminService } from 'src/app/core/services/admin.service';
import { IAdmin } from 'src/app/core/model/admin.model';
import { userService } from 'src/app/core/services/user.service';
import { HttpParams } from '@angular/common/http';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { UserDeviceCreateComponent } from './user-device-create/user-device-create.component';
import { NotificationService } from 'src/app/shared/services/notification.service';

@Component({
  selector: 'app-user-detail',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, UserDeviceCreateComponent],
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent {
  private notif: NotificationService = inject(NotificationService)
  private service: userService = inject(userService)
  private active: ActivatedRoute = inject(ActivatedRoute)
  private router: Router = inject(Router)
  public rawStatus = Status
  public status: Status = Status.initial
  public data?: IUser
  public list?: IPage<IDevice[]>
  public  form: FormControl = new FormControl('')
  public mode: boolean = false

  public dataParams: IParam = {
    page: 1,
    limit: 10,
    search: ""
  }

  ngOnInit(): void {
    this.active.params.subscribe(params => {
      this.find(params["id"] ?? "")
    })
    this.form.valueChanges.subscribe({
      next: (res) => {
        this.dataParams.search = res ?? ""
        this.read()
      }
    })
  }

  find(id: string){
    this.status = Status.loading
    this.service.find(id).subscribe({
      next: (res) => {
        this.data = res.data
        this.read()
      },
      error: (err) => {
        console.log(err);
        this.status = Status.error
      },
    })
  }

  read(){
    this.service.readDevice(this.params, this.data?.id ?? "").subscribe({
      next: (res) => {
        this.list = res
        this.status = Status.initial
      },
      error: (err) => {
        this.list = undefined
        this.status = Status.error
      }
    })
  }

  delete(id: string){
    this.service.removeDevice(id, this.data?.id ?? "").subscribe({
      next: (res) => {
        this.status = Status.initial
        this.notif.push({
          message: "Berhasil menghapus perangkat dari pengguna",
          status: "success"
        })
        this.read()
      },
      error: (err) => {
        console.log(err);
        this.notif.push({
          message: "Gagal menghapus perangkat dari pengguna",
          status: "failure"
        })
        this.status = Status.error
      }
    })
  }

  toogle(){
    this.mode = !this.mode
    if (!this.mode) {
      this.read()
    }
  }

  back() {
    this.router.navigateByUrl('/user/list')
  }

  private get params(): HttpParams {
    return new HttpParams()
      .set("page", this.dataParams.page ?? 1)
      .append("limit", this.dataParams.limit ?? 10)
      .append("search", this.dataParams.search ?? "")
  }
}
