import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Status } from 'src/app/core/enum';
import { AdminService } from 'src/app/core/services/admin.service';
import { NotificationService } from 'src/app/shared/services/notification.service';
import { IAdmin } from 'src/app/core/model/admin.model';
import { ActivatedRoute, Router } from '@angular/router';
import { userService } from 'src/app/core/services/user.service';
import { IUser } from 'src/app/core/model';

@Component({
  selector: 'app-user-update',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './user-update.component.html',
  styleUrls: ['./user-update.component.css']
})
export class UserUpdateComponent {
  private router = inject(Router)
  private service = inject(userService)
  private notif = inject(NotificationService)
  private fb = inject(FormBuilder)
  private active: ActivatedRoute = inject(ActivatedRoute)

  public device?: IUser
  public rawStatus = Status
  public status: Status = Status.initial
  public currentID: string = ""


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
    this.router.navigateByUrl("/user/list")
  }

  setForm(data: IUser): void {
    this.name?.setValue(data.name)
  }

  get formData(): FormData {
    let data = new FormData()
    data.set("name", this.name?.value ?? "")
    return data
  }
}
