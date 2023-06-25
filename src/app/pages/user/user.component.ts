import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from 'src/app/shared/layouts/home/home.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule, HomeComponent, RouterOutlet],
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {

}
