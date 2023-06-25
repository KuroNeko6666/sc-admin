import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderService } from 'src/app/core/services/order.service';
import { ActivatedRoute, Router } from '@angular/router';
import { PageChange, Status } from 'src/app/core/enum';
import { IDevice, IPage, IParam } from 'src/app/core/model';
import { IOrder } from 'src/app/core/model/order.model';
import { HttpParams } from '@angular/common/http';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-order-detail',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.css']
})
export class OrderDetailComponent {

  private service: OrderService = inject(OrderService)
  private active: ActivatedRoute = inject(ActivatedRoute)
  private router: Router = inject(Router)
  public status: Status = Status.initial
  public data?: IPage<IOrder>
  public currentID: string = ""
  public rawStatus = Status

  public form: FormControl = new FormControl('')
  public dataParams: IParam = {
    page: 1,
    limit: 10,
    search: ""
  }


  ngOnInit(): void {
    this.active.params.subscribe(params => {
      this.find(params["id"] ?? "")
    })

    this.form.valueChanges.subscribe(res => {
      this.dataParams.search = res ?? ""
      this.find(this.currentID)
    })
  }

  changePage(data: "increment" | "decrement"): void {
    switch (data) {
      case "increment":
        this.dataParams.page! += 1
        break;
      case "decrement":
        this.dataParams.page! -= 1
        break;
    }
    this.find(this.currentID)
  }

  find(id: string){
    this.status = Status.loading
    this.service.find(id, this.params).subscribe({
      next: (res) => {
        console.log(res);

        this.data = res
        this.status = Status.initial
      },
      error: (err) => {
        console.log(err);
        this.status = Status.error
      },
    })
  }

  back() {
    this.router.navigateByUrl('/order/list')
  }

  private get params(): HttpParams {
    return new HttpParams()
      .set("page", this.dataParams.page ?? 1)
      .append("limit", this.dataParams.limit ?? 10)
      .append("search", this.dataParams.search ?? "")
  }

}
