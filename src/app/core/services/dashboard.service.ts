import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { IBase, IChart } from '../model';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  private host: string = environment.api.host
  private path = environment.api.path.dashboard

  constructor(
    private client: HttpClient
  ) { }

  readUser(params: HttpParams): Observable<IBase<IChart>> {
    let url: string = [this.host, this.path, "user"].join('')
    return this.client.get<IBase<IChart>>(url, {params: params})
  }

  readAdmin(params: HttpParams): Observable<IBase<IChart>> {
    let url: string = [this.host, this.path, "admin"].join('')
    return this.client.get<IBase<IChart>>(url, {params: params})
  }

}
