import { Component, EventEmitter, Input, OnInit, Output, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IDevice, IPage, IParam, IUser } from 'src/app/core/model';
import { DeviceService } from 'src/app/core/services';
import { HttpParams } from '@angular/common/http';
import { Status } from 'src/app/core/enum';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { userService } from 'src/app/core/services/user.service';
import { NotificationService } from 'src/app/shared/services/notification.service';
import { IDeviceMarket } from 'src/app/core/model/device.model';

@Component({
  selector: 'app-user-device-create',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './user-device-create.component.html',
  styleUrls: ['./user-device-create.component.css']
})
export class UserDeviceCreateComponent implements OnInit {
  @Input() user?: IUser
  @Output() onBack = new EventEmitter()
  private notif: NotificationService = inject(NotificationService)


  private service = inject(DeviceService)
  private usr = inject(userService)
  private fb = inject(FormBuilder)

  public rawStatus = Status
  public status = Status.initial
  public list?: IPage<IDeviceMarket[]>
  public search: FormControl = new FormControl('')

  public dataParams: IParam = {
    page: 1,
    limit: 10,
    search: ""
  }

  ngOnInit(): void {
    this.read()
    this.search.valueChanges.subscribe({
      next: (res) => {
        this.dataParams.search = res ?? ""
        this.read()
      }
    })
  }

  submit(data: IDevice){
    let form = this.formData(data)
    this.usr.addDevice(form).subscribe({
      next: (res) => {
        this.back()
        this.notif.push({
          message: "Berhasil menambahkan perangkat untuk pengguna",
          status: "success"
        })
      },
      error: (err) => {
        console.log(err);
        this.notif.push({
          message: "Gagal menambahkan perangkat untuk pengguna",
          status: "failure"
        })
      }
    })
  }

  read(): void {
    this.usr.readNotHave(this.params, this.user?.id ?? "").subscribe({
      next: (res) => {
        this.list = res
      },
      error: (err) => {}
    })
  }

  back(): void {
    this.onBack.emit()
  }

  private formData(data: IDevice): FormData {
    let fd = new FormData()
    fd.set("user_id", this.user?.id ?? "")
    fd.append("device_id", data.id ?? "")
    return fd
  }

  private get params(): HttpParams {
    return new HttpParams()
      .set("page", this.dataParams.page ?? 1)
      .append("limit", this.dataParams.limit ?? 10)
      .append("search", this.dataParams.search ?? "")
  }

}
