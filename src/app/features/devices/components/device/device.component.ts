import { Component, Input, OnInit } from '@angular/core';
import { Device } from 'src/app/core/models/device.model';
import { DevicesService } from 'src/app/core/services/devices/devices.service';

@Component({
  selector: 'app-device',
  templateUrl: './device.component.html',
  styleUrls: ['./device.component.scss'],
})
export class DeviceComponent implements OnInit {
  @Input() device: Device = null;
  constructor(private deviceService: DevicesService) {}

  ngOnInit() {}

  delete() {
    this.deviceService.delete(this.device);
  }
}
