import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DevicesPage } from './devices.page';

const routes: Routes = [
  {
    path: '',
    component: DevicesPage,
  },
  {
    path: ':id',
    loadChildren: () =>
      import('./pages/device/device.module').then((m) => m.DevicePageModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DevicesPageRoutingModule {}
