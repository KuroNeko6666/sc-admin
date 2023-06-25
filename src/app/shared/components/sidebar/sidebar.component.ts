import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

const LOGO = [
  "bg-[url('https://preview.keenthemes.com/metronic/theme/html/demo2/dist/assets/media/logos/logo-letter-1.png')]",
  "bg-[url('https://preview.keenthemes.com/metronic/theme/html/demo2/dist/assets/media/logos/logo-letter-9.png')]",
]

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  @Input() show?: boolean
  @Input() current?: string
  @Output() onClose = new EventEmitter()
  @Output() public onChangePage = new EventEmitter<string>()


  public logo: string[] = LOGO

  public close() {
    this.onClose.emit()
  }

  public changePage(path: string) {
    this.onChangePage.emit(path)
  }

}
