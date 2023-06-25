import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { IBase, IDeviceData, IPage } from '../model';

@Injectable({
  providedIn: 'root'
})
export class DeviceDataService {

  private host: string = environment.api.host
  private path = environment.api.path.deviceData

  constructor(
    private client: HttpClient
  ) { }

  read(params: HttpParams): Observable<IPage<IDeviceData[]>> {
    let url: string = [this.host, this.path].join('')
    return this.client.get<IPage<IDeviceData[]>>(url, { params: params})
  }

  find(id: string): Observable<IBase<IDeviceData>> {
    let url: string = [this.host, this.path, "/", id].join('')
    return this.client.get<IBase<IDeviceData>>(url)
  }

}
