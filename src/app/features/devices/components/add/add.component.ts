import { Component, OnInit } from '@angular/core';
import { ModalController, ToastController } from '@ionic/angular';
import { Device } from 'src/app/core/models/device.model';
import { types } from 'src/app/core/constants/types.constant';
import { DevicesService } from 'src/app/core/services/devices/devices.service';

type Dev = { name: string; manufacturer: string };
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss'],
})
export class AddComponent implements OnInit {
  model = new Device('', '', '');
  types = types;
  visible: 'loading' | 'select' | 'form' = 'loading';
  options: Dev[] = [
    {
      name: 'Phillips Hue 1234156312023',
      manufacturer: 'Phillips',
    },
    { name: 'Hama STCKDS 30192snklad', manufacturer: 'Hama' },
    { name: 'Hama SCHLTR dsadsa3201ß3', manufacturer: 'Hama' },
  ];

  constructor(
    private modalController: ModalController,
    private deviceService: DevicesService,
    private toastController: ToastController
  ) {}

  ngOnInit() {
    setTimeout(() => {
      this.visible = 'select';
    }, 1200);
  }

  async onSubmit() {
    this.deviceService.add(this.model);
    const toast = await this.toastController.create({
      header: 'Gerät wurde erfolgreich hinzugefügt',
      message: `${this.model.name} wurde erfolgreich eingerichtet!`,
      duration: 2500,
    });
    await toast.present();
    this.visible = 'select';
  }

  async dismissModal() {
    await this.modalController.dismiss();
  }

  gotoRegisterPod() {
    this.visible = 'select';
  }

  async selectDevice({ name, manufacturer }: Dev) {
    this.model = new Device(name, manufacturer, '');
    this.visible = 'form';
  }
}
