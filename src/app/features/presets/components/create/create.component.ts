import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Preset } from 'src/app/core/models/preset.model';
import { DevicesService } from 'src/app/core/services/devices/devices.service';
import { PresetService } from 'src/app/core/services/preset/preset.service';
import { guid } from 'src/app/core/utils/guid.utils';
import { Create } from './create.model';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
})
export class CreateComponent implements OnInit {
  @Input() preset: Preset = null;
  model: Create;
  deviceSelection: { name: string; id: string }[] = [];
  constructor(
    private presetService: PresetService,
    private modalController: ModalController,
    private devicesService: DevicesService
  ) {
    this.deviceSelection = [...this.devicesService.devices.value].map(
      ({ name, id }) => ({ name, id })
    );
  }

  ngOnInit() {
    if (this.preset) {
      const { name, id, devices } = this.preset;
      this.model = new Create(
        name,
        id,
        devices.map((x) => x.id)
      );
    } else {
      this.model = new Create('', guid());
    }
  }

  async onSubmit() {
    const devices = [...this.devicesService.devices.value];
    const payload = new Preset(
      this.model.name,
      this.model.id,
      this.model.devices.map((id) => devices.find((x) => x.id === id))
    );
    this.presetService.addOrEdit(payload);
    await this.modalController.dismiss();
  }
}
