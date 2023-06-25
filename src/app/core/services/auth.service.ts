import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { IBase, IUser } from '../model';
import { IAdmin } from '../model/admin.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private host: string = environment.api.host
  private path = environment.api.path.auth
  private storage = "user"

  constructor(
    private client: HttpClient
  ) { }

  login(data: FormData): Observable<IBase<IAdmin>> {
    let url: string = [this.host, this.path].join('')
    return this.client.post<IBase<IAdmin>>(url, data)
  }

  register(data: FormData): Observable<IBase<string>> {
    let url: string = [this.host, this.path].join('')
    return this.client.put<IBase<string>>(url, data)
  }

  validate(): boolean {
    return this.user != undefined ? true : false
  }

  logout(): Observable<any> {
    let url: string = [this.host, this.path].join('')
    this.delete()
    return this.client.delete(url)
  }

  delete(): void {
    localStorage.clear()
  }

  save(user: IAdmin): void {
    localStorage.setItem(this.storage, JSON.stringify(user))
  }

  get user(): IAdmin | undefined {
    let raw = localStorage.getItem(this.storage)
    if (raw == null) { return undefined }
    let user: IAdmin = JSON.parse(raw) as IAdmin
    return user
  }


}

