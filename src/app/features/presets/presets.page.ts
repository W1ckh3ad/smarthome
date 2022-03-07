import { Component, OnInit } from '@angular/core';
import { ModalController, ActionSheetController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { Preset } from 'src/app/core/models/preset.model';
import { PresetService } from 'src/app/core/services/preset/preset.service';
import { CreateComponent } from './components/create/create.component';

@Component({
  selector: 'app-presets',
  templateUrl: './presets.page.html',
  styleUrls: ['./presets.page.scss'],
})
export class PresetsPage implements OnInit {
  presets$: Observable<Preset[]> = null;
  constructor(
    private modalController: ModalController,
    private presetService: PresetService,
    private actionSheetController: ActionSheetController
  ) {}

  ngOnInit() {
    this.presets$ = this.presetService.presets$;
  }

  async neuesPreset() {
    const modal = await this.modalController.create({
      initialBreakpoint: 0.6,
      breakpoints: [0.4, 0.6, 0.8, 1],
      component: CreateComponent,
    });
    return await modal.present();
  }

  async edit(model: Preset) {
    const modal = await this.modalController.create({
      initialBreakpoint: 0.6,
      breakpoints: [0.4, 0.6, 0.8, 1],
      component: CreateComponent,
      componentProps: {
        preset: model,
      },
    });
    return await modal.present();
  }

  async delete(preset: Preset) {
    const actionSheet = await this.actionSheetController.create({
      header: 'Preset entfernen?',
      buttons: [
        {
          text: 'Delete',
          role: 'destructive',
          icon: 'trash',
          handler: () => {
            this.presetService.delete(preset);
          },
        },
        {
          text: 'Cancel',
          icon: 'close',
          role: 'cancel',
        },
      ],
    });
    await actionSheet.present();
  }
}
