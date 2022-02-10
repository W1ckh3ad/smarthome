import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Rule } from 'src/app/core/models/rule.model';
import { DevicesService } from 'src/app/core/services/devices/devices.service';
import { RulesService } from 'src/app/core/services/rules/rules.service';
import { guid } from 'src/app/core/utils/guid.utils';
import { Create } from './create.model';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
})
export class CreateComponent implements OnInit {
  @Input() rule = null;
  model: Create;
  deviceSelection: { name: string; id: string }[] = [];
  constructor(
    private ruleService: RulesService,
    private modalController: ModalController,
    private devicesService: DevicesService
  ) {
    this.deviceSelection = [...this.devicesService.devices.value].map(
      ({ name, id }) => ({ name, id })
    );
  }

  ngOnInit() {
    if (this.rule) {
      const {
        name,
        id,
        trigger: { id: trigger },
        event: { id: event },
      } = this.rule;
      this.model = new Create(name, id, trigger, event);
    } else {
      this.model = new Create('', guid(), '', '');
    }
  }

  async onSubmit() {
    const payload = new Rule(
      this.model.name,
      this.model.id,
      this.devicesService.getDevice(this.model.trigger),
      this.devicesService.getDevice(this.model.event)
    );
    this.ruleService.addOrEdit(payload);
    await this.modalController.dismiss();
  }
}
