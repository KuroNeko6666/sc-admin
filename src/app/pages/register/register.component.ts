import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, AbstractControl, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services';
import { HttpClientModule } from '@angular/common/http';
import { NotificationService } from 'src/app/shared/services/notification.service';
import { NotificationComponent } from 'src/app/shared/components/notification/notification.component';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, HttpClientModule, NotificationComponent],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  private service: AuthService = inject(AuthService)
  private builder: FormBuilder = inject(FormBuilder)
  private notif = inject(NotificationService)
  private router: Router = inject(Router)

  isLoading: boolean = false
  isPassword: boolean = true

  form: FormGroup = this.builder.group({
    "name": ["", Validators.required],
    "username": ["", Validators.required],
    "email": ["", [Validators.required, Validators.email]],
    "password": ["",[ Validators.required, Validators.minLength(8)]]
  })

  changePage(): void {
    this.router.navigateByUrl("/login")
  }

  submit(): void {
    if (this.form.invalid) { return this.form.markAllAsTouched() }
    this.isLoading = true
    this.service.register(this.formData).subscribe({
      next: (_) => {
        this.isLoading = false
        this.notif.push({
          status:"success",
          message:"Berhasil Daftar"
        })
        this.router.navigateByUrl('/login')
      },
      error: (err) => {
        this.notif.push({
          status:"failure",
          message:"Gagal Daftar"
        })
        this.isLoading = false
        console.log(err);
      },
    })
  }

  get name(): AbstractControl<any, any> | null {
    return this.form.get("name")
  }

  get username(): AbstractControl<any, any> | null {
    return this.form.get("username")
  }

  get email(): AbstractControl<any, any> | null {
    return this.form.get("email")
  }

  get password(): AbstractControl<any, any> | null {
    return this.form.get("password")
  }

  private get formData(): FormData {
    let data: FormData = new FormData()
    data.append("name", this.name?.value ?? "")
    data.append("username", this.username?.value ?? "")
    data.append("email", this.email?.value ?? "")
    data.append("password", this.password?.value ?? "")
    return data
  }
}
