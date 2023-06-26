import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BackgroundComponent } from '../../components/background/background.component';
import { HeaderComponent } from '../../components/header/header.component';
import { SidebarComponent } from '../../components/sidebar/sidebar.component';
import { IUser } from 'src/app/core/model';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services';
import { NotificationComponent } from '../../components/notification/notification.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    BackgroundComponent,
    HeaderComponent,
    SidebarComponent,
    NotificationComponent,
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  private service : AuthService = inject(AuthService)

  public scrollDown: boolean = false
  public user?: IUser
  public sidebar: boolean = false
  public currentUrl?: string

  constructor(private router: Router){}

  ngOnInit(): void {
    this.currentUrl = this.router.url
    this.user = this.service.user
  }

  public onScroll(event: any): void{
    event.target.scrollTop > 50 ? this.scrollDown = true : this.scrollDown = false
  }

  public onSidebar(): void {
    this.sidebar = !this.sidebar
  }

  public onChangePage(path: string): void {
    this.router.navigateByUrl(path)
  }

  public onChangePageFromSide(path: string): void {
    this.sidebar = false
    setTimeout(() => this.onChangePage(path), 500)
  }

  public onLogout(): void {
    this.service.logout()
  }
}
