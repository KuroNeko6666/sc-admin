import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { IBase, IDevice, IPage, IUser } from '../model';
import { IDeviceMarket } from '../model/device.model';

@Injectable({
  providedIn: 'root'
})
export class userService {

  private host: string = environment.api.host
  private path = environment.api.path.user

  constructor(
    private client: HttpClient
  ) { }

  read(params: HttpParams): Observable<IPage<IUser[]>> {
    let url: string = [this.host, this.path].join('')
    return this.client.get<IPage<IUser[]>>(url, { params: params})
  }

  readDevice(params: HttpParams, id: string): Observable<IPage<IDevice[]>> {
    let url: string = [this.host, this.path, "/device/", id].join('')
    return this.client.get<IPage<IDevice[]>>(url, { params: params})
  }

  readNotHave(params: HttpParams, id: string): Observable<IPage<IDeviceMarket[]>> {
    let url: string = [this.host, this.path, "/device/user/", id].join('')
    return this.client.get<IPage<IDeviceMarket[]>>(url, { params: params})
  }

  find(id: string): Observable<IBase<IUser>> {
    let url: string = [this.host, this.path, "/", id].join('')
    return this.client.get<IBase<IUser>>(url)
  }

  add(data: FormData): Observable<IBase<string>> {
    let url: string = [this.host, this.path].join('')
    return this.client.post<IBase<string>>(url, data)
  }

  addDevice(data: FormData): Observable<IBase<string>> {
    let url: string = [this.host, this.path, "/device"].join('')
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

  removeDevice(deviceID: string, userID: string): Observable<IBase<string>> {
    let url: string = [this.host, this.path, "/device/", deviceID, "/", userID].join('')
    return this.client.delete<IBase<string>>(url)
  }


}
