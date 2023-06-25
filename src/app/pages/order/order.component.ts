import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from 'src/app/shared/layouts/home/home.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-order',
  standalone: true,
  imports: [CommonModule, HomeComponent, RouterOutlet],
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent {

}
