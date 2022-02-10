import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Device } from 'src/app/core/models/device.model';
import { guid } from 'src/app/core/utils/guid.utils';

@Component({
  selector: 'app-device-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  @Input() device: Device = new Device(guid(), '', '', '');
  @Output() submit = new EventEmitter<Device>();
  constructor() {}

  ngOnInit() {}

  onSubmit() {
    this.submit.emit(this.device);
  }
}
