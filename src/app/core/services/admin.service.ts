import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { IBase, IDevice, IPage, IUser } from '../model';
import { IAdmin } from '../model/admin.model';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  private host: string = environment.api.host
  private path = environment.api.path.admin

  constructor(
    private client: HttpClient
  ) { }

  read(params: HttpParams): Observable<IPage<IAdmin[]>> {
    let url: string = [this.host, this.path].join('')
    return this.client.get<IPage<IAdmin[]>>(url, { params: params})
  }

  find(id: string): Observable<IBase<IAdmin>> {
    let url: string = [this.host, this.path, "/", id].join('')
    return this.client.get<IBase<IAdmin>>(url)
  }

  add(data: FormData): Observable<IBase<string>> {
    let url: string = [this.host, this.path].join('')
    return this.client.post<IBase<string>>(url, data)
  }

  edit(data: FormData, id: string): Observable<IBase<string>> {
    let url: string = [this.host, this.path, "/", id].join('')
    return this.client.put<IBase<string>>(url, data)
  }

  remove(id: string): Observable<IBase<string>> {
    let url: string = [this.host, this.path, "/", id].join('')
    return this.client.delete<IBase<string>>(url)
  }


}
