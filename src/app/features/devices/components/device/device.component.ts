import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Device } from 'src/app/core/models/device.model';
import { DevicesService } from 'src/app/core/services/devices/devices.service';
import { EditComponent } from '../edit/edit.component';

@Component({
  selector: 'app-device',
  templateUrl: './device.component.html',
  styleUrls: ['./device.component.scss'],
})
export class DeviceComponent implements OnInit {
  @Input() device: Device = null;
  constructor(
    private deviceService: DevicesService,
    private modal: ModalController
  ) {}

  ngOnInit() {}

  delete() {
    this.deviceService.delete(this.device);
  }

  async edit() {
    const modal = await this.modal.create({
      component: EditComponent,
      initialBreakpoint: 0.7,
      breakpoints: [0, 0.2, 0.7, , 0.8, 0.9, 1],
      componentProps: {
        device: this.device,
      },
    });
    await modal.present();
  }
}
