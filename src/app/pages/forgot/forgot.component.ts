import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services';

@Component({
  selector: 'app-forgot',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.css']
})
export class ForgotComponent {
  private service: AuthService = inject(AuthService)
  private router: Router = inject(Router)

  isLoading: boolean = false

  email: FormControl = new FormControl('', [Validators.email])

  submit(): void {
    this.isLoading = true
    this.service.login(this.formData).subscribe({
      next: (res) => {
        this.service.save(res.data)
        this.router.navigateByUrl('/dashboard')
      },
      error: (err) => {
        console.log(err);
      },
      complete: () => this.isLoading = false
    })
  }

  private get formData(): FormData {
    let data: FormData = new FormData()
    data.append("email", this.email?.value ?? "")
    return data
  }
}
