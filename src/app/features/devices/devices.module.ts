import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DevicesPageRoutingModule } from './devices-routing.module';

import { DevicesPage } from './devices.page';
import { SharedModule } from 'src/app/shared/shared.module';
import { AddComponent } from './components/add/add.component';
import { DeviceComponent } from './components/device/device.component';
import { AutoCompleteModule } from 'ionic4-auto-complete';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DevicesPageRoutingModule,
    SharedModule,
    AutoCompleteModule,
  ],
  exports: [SharedModule],
  declarations: [DevicesPage, AddComponent, DeviceComponent],
})
export class DevicesPageModule {}
