import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Status } from 'src/app/core/enum';
import { DeviceService } from 'src/app/core/services';
import { NotificationService } from 'src/app/shared/services/notification.service';
import { AdminService } from 'src/app/core/services/admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-add',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './admin-add.component.html',
  styleUrls: ['./admin-add.component.css']
})
export class AdminAddComponent {
  private service = inject(AdminService)
  private notif = inject(NotificationService)
  private router = inject(Router)
  private fb = inject(FormBuilder)

  public rawStatus = Status
  public status: Status = Status.initial
  public role: "operator-user" | "operator-device" = "operator-user"
  public isPassword: boolean = true
  public drawer: boolean = false

  public form = this.fb.group({
    name : ["", [Validators.required]],
    username : ["", [Validators.required]],
    email : ["", [Validators.required, Validators.required]],
    password : ["", [Validators.required, Validators.minLength(8)]],
  })

  get name() {
    return this.form.get("name")
  }

  get username() {
    return this.form.get("username")
  }

  get email() {
    return this.form.get("email")
  }

  get password() {
    return this.form.get("password")
  }

  drawerToggle(): void {
    this.drawer = !this.drawer
  }

  changeRole(data: "operator-user" | "operator-device"): void {
    this.role = data
    this.drawerToggle()
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
        this.router.navigateByUrl("/admin/list")
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
    this.router.navigateByUrl("/admin/list")
  }

  get formData(): FormData {
    let data = new FormData()
    data.set("name", this.name?.value ?? "")
    data.append("username", this.username?.value ?? "")
    data.append("email", this.email?.value ?? "")
    data.append("password", this.password?.value ?? "")
    data.append("role", this.role)
    return data
  }
}
