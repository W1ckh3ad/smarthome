import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegelnPage } from './regeln.page';

const routes: Routes = [
  {
    path: '',
    component: RegelnPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegelnPageRoutingModule {}
