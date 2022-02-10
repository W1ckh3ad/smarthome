import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegelnPageRoutingModule } from './regeln-routing.module';

import { RegelnPage } from './regeln.page';
import { SharedModule } from 'src/app/shared/shared.module';
import { CreateComponent } from './components/create/create.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegelnPageRoutingModule,
    SharedModule,
  ],
  exports: [SharedModule],
  declarations: [RegelnPage, CreateComponent],
})
export class RegelnPageModule {}
