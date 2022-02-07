import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Device } from 'src/app/core/models/device.model';
import { types } from 'src/app/core/constants/types.constant';
import { DevicesService } from 'src/app/core/services/devices/devices.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss'],
})
export class AddComponent implements OnInit {
  model = new Device('', '', '');
  types = types;
  constructor(
    private modalController: ModalController,
    private deviceService: DevicesService
  ) {}

  ngOnInit() {}

  async onSubmit() {
    this.deviceService.add(this.model);
    await this.dismissModal();
  }

  async dismissModal() {
    await this.modalController.dismiss();
  }
}
