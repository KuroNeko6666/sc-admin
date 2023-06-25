import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IUser } from 'src/app/core/model';

const LOGO = [
  "bg-[url('https://preview.keenthemes.com/metronic/theme/html/demo2/dist/assets/media/logos/logo-letter-1.png')]",
  "bg-[url('https://preview.keenthemes.com/metronic/theme/html/demo2/dist/assets/media/logos/logo-letter-9.png')]",
]

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Input() public scrollDown: boolean = false
  @Input() public user?: IUser
  @Input() public current?: string
  @Output() public onSidebar = new EventEmitter()
  @Output() public onLogout = new EventEmitter()
  @Output() public onChangePage = new EventEmitter<string>()

  ngOnInit(): void {
    console.log(this.current == "/dashboard" && !this.scrollDown);
  }

  public logo: string[] = LOGO
  public profile: boolean = false

  sidebar(): void {
    this.onSidebar.emit()
  }

  changePage(path: string): void {
    this.onChangePage.emit(path)
  }

  logout(): void {
    this.onLogout.emit()
  }

  onProfile(): void {
    this.profile = !this.profile
  }
}
