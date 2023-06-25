import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { IBase, IDevice, IPage, IUser } from '../model';
import { IOrder } from '../model/order.model';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private host: string = environment.api.host
  private path = environment.api.path.order

  constructor(
    private client: HttpClient
  ) { }

  read(params: HttpParams): Observable<IPage<IOrder[]>> {
    let url: string = [this.host, this.path].join('')
    return this.client.get<IPage<IOrder[]>>(url, { params: params})
  }

  find(id: string, params: HttpParams): Observable<IPage<IOrder>> {
    let url: string = [this.host, this.path, "/", id].join('')
    return this.client.get<IPage<IOrder>>(url, { params: params})
  }

  change(orderID: string, data: FormData): Observable<IPage<IOrder[]>> {
    let url: string = [this.host, this.path, "/", orderID].join('')
    return this.client.put<IPage<IOrder[]>>(url, data)
  }

}
