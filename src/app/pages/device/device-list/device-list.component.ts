import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HttpParams } from '@angular/common/http';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { Status, PageChange } from 'src/app/core/enum';
import { IPage, IDevice, IParam } from 'src/app/core/model';
import { DeviceService } from 'src/app/core/services';
import { Router } from '@angular/router';
import { NotificationService } from 'src/app/shared/services/notification.service';

@Component({
  selector: 'app-device-list',
  standalone: true,
  imports: [CommonModule, HttpClientModule, ReactiveFormsModule],
  templateUrl: './device-list.component.html',
  styleUrls: ['./device-list.component.css']
})
export class DeviceListComponent implements OnInit {
  private service: DeviceService = inject(DeviceService)
  private notif: NotificationService = inject(NotificationService)
  private router: Router = inject(Router)

  public form: FormControl = new FormControl('')

  public devices?: IPage<IDevice[]>
  public status: Status = Status.initial
  public rawStatus = Status

  public dataParams: IParam = {
    page: 1,
    limit: 10,
    search: ""
  }

  ngOnInit(): void {
    this.read()
    this.form.valueChanges.subscribe(res => this.search(res))
  }

  changePage(data: PageChange): void {
    switch (data) {
      case PageChange.increment:
        this.dataParams.page! += 1
        break;
      case PageChange.decrement:
        this.dataParams.page! -= 1
        break;
    }
    this.read()
  }

  create(): void {
    this.router.navigateByUrl("/device/create")
  }

  update(id: string): void {
    this.router.navigateByUrl("/device/update/" + id)
  }

  detail(id: string): void {
    this.router.navigateByUrl("/device/detail/" + id)
  }

  delete(id: string): void {
    this.service.remove(id).subscribe({
      next: (res) => {
        this.notif.push({
          message: "Berhasil menghapus data",
          status: "success"
        }),
        this.read()
      },
      error: (err) => {
        console.log(err);
        this.notif.push({
          message: "Gagal menghapus data",
          status: "failure"
        })
      }
    })
  }

  limitChange(limit: number): void {
    this.dataParams.limit = limit
    this.read()
  }

  search(text: string | null): void {
    this.dataParams.search = text ?? ""
    this.read()
  }

  read() {
    this.status = Status.loading
    this.service.read(this.params).subscribe({
      next: (res) => {
        this.devices = res
        this.status = Status.initial
      },
      error: (err) => {
        this.devices = undefined
        this.status = Status.error
      }
    })
  }

  private get params(): HttpParams {
    return new HttpParams()
      .set("page", this.dataParams.page ?? 1)
      .append("limit", this.dataParams.limit ?? 10)
      .append("search", this.dataParams.search ?? "")
  }
}
