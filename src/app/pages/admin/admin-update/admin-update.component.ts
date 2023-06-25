import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Status } from 'src/app/core/enum';
import { AdminService } from 'src/app/core/services/admin.service';
import { NotificationService } from 'src/app/shared/services/notification.service';
import { IAdmin } from 'src/app/core/model/admin.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-admin-update',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './admin-update.component.html',
  styleUrls: ['./admin-update.component.css']
})
export class AdminUpdateComponent {
  private router = inject(Router)
  private service = inject(AdminService)
  private notif = inject(NotificationService)
  private fb = inject(FormBuilder)
  private active: ActivatedRoute = inject(ActivatedRoute)

  public device?: IAdmin
  public rawStatus = Status
  public status: Status = Status.initial
  public currentID: string = ""
  public role: "operator-user" | "operator-device" | "operator" = "operator-user"
  public drawer: boolean = false


  public form = this.fb.group({
    name : ["", [Validators.required]],
  })

  get name() {
    return this.form.get("name")
  }

  ngOnInit(): void {
    this.active.params.subscribe(params => {
      this.find(params["id"] ?? "")
    })
  }

  drawerToggle(): void {
    this.drawer = !this.drawer
  }

  changeRole(data: "operator-user" | "operator-device"): void {
    this.role = data
    this.drawerToggle()
  }

  find(id: string){
    this.status = Status.loading
    this.currentID = id
    this.service.find(id).subscribe({
      next: (res) => {
        this.setForm(res.data)
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

  back(): void {
    this.router.navigateByUrl("/admin/list")
  }

  setForm(data: IAdmin): void {
    this.name?.setValue(data.name)
    this.role = data.role
  }

  get formData(): FormData {
    let data = new FormData()
    data.set("name", this.name?.value ?? "")
    data.append("role", this.role)
    return data
  }
}
