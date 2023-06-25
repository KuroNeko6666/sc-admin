import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, OnDestroy, inject } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services';
import { NotificationComponent } from 'src/app/shared/components/notification/notification.component';
import { NotificationService } from 'src/app/shared/services/notification.service';



@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    NotificationComponent
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnDestroy {
  private notif = inject(NotificationService)
  private service: AuthService = inject(AuthService)
  private builder: FormBuilder = inject(FormBuilder)
  private router: Router = inject(Router)

  isLoading: boolean = false
  isPassword: boolean = true

  form: FormGroup = this.builder.group({
    "email": ["", Validators.required],
    "password": ["", Validators.required]
  })

  submit(): void{
    if (this.form.invalid) { return this.form.markAllAsTouched() }
    this.isLoading = true
    this.service.login(this.formData).subscribe({
      next: (res) => {
        this.service.save(res.data)
        this.isLoading = false
        this.router.navigateByUrl('/dashboard')
      },
      error: (err) => {
        this.notif.push({
          status:"failure",
          message:"Gagal Login"
        })
        this.isLoading = false
        console.log(err)
      },
    })
  }

  changePage(): void {
    this.router.navigateByUrl("/register")
  }

  get email(): AbstractControl<any, any> | null {
    return this.form.get("email")
  }

  get password(): AbstractControl<any, any> | null {
    return this.form.get("password")
  }

  private get formData(): FormData {
    let data: FormData = new FormData()
    data.append("email", this.email?.value ?? "")
    data.append("password", this.password?.value ?? "")
    return data
  }

  ngOnDestroy(): void {

  }

}
