import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeviceService } from 'src/app/core/services';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpParams } from '@angular/common/http';
import { Status } from 'src/app/core/enum';
import { NotificationService } from 'src/app/shared/services/notification.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-device-add',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './device-add.component.html',
  styleUrls: ['./device-add.component.css']
})
export class DeviceAddComponent {
  private router = inject(Router)
  private service = inject(DeviceService)
  private notif = inject(NotificationService)
  private fb = inject(FormBuilder)

  public rawStatus = Status
  public status: Status = Status.initial

  public form = this.fb.group({
    id : ["", [Validators.required]],
    model : ["", [Validators.required]],
    address : ["", [Validators.required]],
    city : ["", [Validators.required]],
    province : ["", [Validators.required]],
  })

  get id() {
    return this.form.get("id")
  }

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

  submit(): void {
    if (this.form.invalid) { return this.form.markAllAsTouched() }
    this.status = Status.loading
    this.service.add(this.formData).subscribe({
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

  back(): void {
    this.router.navigateByUrl("/device/list")
  }

  get formData(): FormData {
    let data = new FormData()
    data.set("id", this.id?.value ?? "")
    data.append("model", this.model?.value ?? "")
    data.append("address", this.address?.value ?? "")
    data.append("city", this.city?.value ?? "")
    data.append("province", this.province?.value ?? "")
    data.append("longitude", "")
    data.append("latitude", "")
    return data
  }

}
