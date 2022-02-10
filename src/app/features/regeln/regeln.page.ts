import { Component, OnInit } from '@angular/core';
import { ActionSheetController, ModalController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { Rule } from 'src/app/core/models/rule.model';
import { RulesService } from 'src/app/core/services/rules/rules.service';
import { CreateComponent } from './components/create/create.component';

@Component({
  selector: 'app-regeln',
  templateUrl: './regeln.page.html',
  styleUrls: ['./regeln.page.scss'],
})
export class RegelnPage implements OnInit {
  rules$: Observable<Rule[]> = null;
  constructor(
    private modalController: ModalController,
    private rulesService: RulesService,
    private actionSheetController: ActionSheetController
  ) {}

  ngOnInit() {
    this.rules$ = this.rulesService.rules$;
  }

  async neueRegel() {
    const modal = await this.modalController.create({
      initialBreakpoint: 0.6,
      breakpoints: [0.4, 0.6, 0.8, 1],
      component: CreateComponent,
    });
    return await modal.present();
  }

  async edit(model: Rule) {
    const modal = await this.modalController.create({
      initialBreakpoint: 0.6,
      breakpoints: [0.4, 0.6, 0.8, 1],
      component: CreateComponent,
      componentProps: {
        rule: model,
      },
    });
    return await modal.present();
  }

  async delete(rule: Rule) {
    const actionSheet = await this.actionSheetController.create({
      header: 'Regel entfernen?',
      buttons: [
        {
          text: 'Delete',
          role: 'destructive',
          icon: 'trash',
          handler: () => {
            this.rulesService.delete(rule);
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
