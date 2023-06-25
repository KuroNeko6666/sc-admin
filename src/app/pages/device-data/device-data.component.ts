import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeviceDataService } from 'src/app/core/services';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-device-data',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './device-data.component.html',
  styleUrls: ['./device-data.component.css']
})
export class DeviceDataComponent {

  private service: DeviceDataService = inject(DeviceDataService)



}
