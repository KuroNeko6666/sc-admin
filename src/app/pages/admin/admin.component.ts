import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from 'src/app/shared/layouts/home/home.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [CommonModule, HomeComponent, RouterOutlet],
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {

}
