import { Component, Input, OnInit } from '@angular/core';
import { ModalController, ToastController } from '@ionic/angular';
import { Device } from 'src/app/core/models/device.model';
import { DevicesService } from 'src/app/core/services/devices/devices.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss'],
})
export class EditComponent implements OnInit {
  @Input() device: Device = null;
  constructor(
    private modalController: ModalController,
    private deviceService: DevicesService,
    private toastController: ToastController
  ) {}

  ngOnInit() {}

  async dismissModal() {
    await this.modalController.dismiss();
  }

  async onSubmit(device: Device) {
    this.deviceService.edit(device);
    const toast = await this.toastController.create({
      header: 'Gerät wurde erfolgreich bearbeitet',
      message: `${device.name} wurde erfolgreich angepasst!`,
      duration: 2500,
    });
    toast.present();
    this.dismissModal();
  }
}
