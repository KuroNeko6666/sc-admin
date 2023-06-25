import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotificationService } from '../../services/notification.service';
import { INotification } from 'src/app/core/model/notification.model';

@Component({
  selector: 'app-notification',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {
  private service: NotificationService = inject(NotificationService)
  public data: INotification[] = []

  ngOnInit(): void {
    this.service.observable.subscribe({
      next: (res) => {
        this.data = res
      }
    })
  }

  delete(id: string): void {
    this.service.delete(id)
  }

}
