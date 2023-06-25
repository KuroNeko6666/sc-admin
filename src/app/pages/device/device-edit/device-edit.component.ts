import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Status } from 'src/app/core/enum';
import { DeviceService } from 'src/app/core/services';
import { NotificationService } from 'src/app/shared/services/notification.service';
import { ActivatedRoute, Router } from '@angular/router';
import { IDevice } from 'src/app/core/model';

@Component({
  selector: 'app-device-edit',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './device-edit.component.html',
  styleUrls: ['./device-edit.component.css']
})
export class DeviceEditComponent implements OnInit {
  private router = inject(Router)
  private service = inject(DeviceService)
  private notif = inject(NotificationService)
  private fb = inject(FormBuilder)
  private active: ActivatedRoute = inject(ActivatedRoute)

  public device?: IDevice
  public rawStatus = Status
  public status: Status = Status.initial
  public currentID: string = ""

  public form = this.fb.group({
    model : ["", [Validators.required]],
    address : ["", [Validators.required]],
    city : ["", [Validators.required]],
    province : ["", [Validators.required]],
  })

  get model() {
    return this.form.get("model")
  }

  get address() {
    return this.form.get("address")
  }

  get city() {
    return this.form.get("city")
  }

  get province() {
    return this.form.get("province")
  }

  ngOnInit(): void {
    this.active.params.subscribe(params => {
      this.find(params["id"] ?? "")
    })
  }

  back(): void {
    this.router.navigateByUrl("/device/list")
  }

  find(id: string){
    this.status = Status.loading
    this.service.find(id).subscribe({
      next: (res) => {
        this.setForm(res.data)
        this.currentID = res.data.id
        this.status = Status.initial
      },
      error: (err) => {
        console.log(err);
        this.status = Status.error
      },
    })
  }

  submit(): void {
    if (this.form.invalid) { return this.form.markAllAsTouched() }
    this.status = Status.loading
    this.service.edit(this.formData, this.currentID).subscribe({
      next: (res) => {
        this.notif.push({
          message: "Data berhasil ditambahkan",
          status: "success"
        })
        this.status = Status.initial
        this.back()
      },
      error: (err) => {
        this.notif.push({
          message: "Data gagal ditambahkan",
          status: "failure"
        })
        console.log(err);
        this.status = Status.error
      }
    })
  }

  setForm(data: IDevice): void {
    this.model?.setValue(data.model)
    this.address?.setValue(data.address.address)
    this.city?.setValue(data.address.city)
    this.province?.setValue(data.address.province)
  }

  get formData(): FormData {
    let data = new FormData()
    data.set("model", this.model?.value ?? "")
    data.append("address", this.address?.value ?? "")
    data.append("city", this.city?.value ?? "")
    data.append("province", this.province?.value ?? "")
    data.append("longitude", "")
    data.append("latitude", "")
    return data
  }
}
