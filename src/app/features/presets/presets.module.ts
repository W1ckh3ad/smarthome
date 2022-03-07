import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PresetsPageRoutingModule } from './presets-routing.module';

import { PresetsPage } from './presets.page';
import { SharedModule } from 'src/app/shared/shared.module';
import { CreateComponent } from './components/create/create.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PresetsPageRoutingModule,
    SharedModule,
  ],
  exports: [SharedModule],
  declarations: [PresetsPage, CreateComponent],
})
export class PresetsPageModule {}
