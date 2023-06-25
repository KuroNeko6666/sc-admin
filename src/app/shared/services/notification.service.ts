import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { INotification } from 'src/app/core/model/notification.model';
import { v4 as uuid } from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  private subject: BehaviorSubject<INotification[]> = new BehaviorSubject<INotification[]>([])
  public observable: Observable<INotification[]> = this.subject.asObservable()

  push(data: INotification): void {
    data.id = uuid()
    let current = this.subject.getValue()
    current.push(data)
    this.subject.next(current)
    setInterval(() => this.delete(data.id!), 3000)
  }

  delete(id: string): void {
    let current = this.subject.getValue()
    let latest = current.filter((res) => res.id != id)
    this.subject.next(latest)
  }



}
