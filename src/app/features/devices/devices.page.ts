import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { BehaviorSubject, Observable } from 'rxjs';
import { map, combineLatestWith } from 'rxjs/operators';
import { DevicesService } from 'src/app/core/services/devices/devices.service';
import { sortDevicesIntoLetterSegments } from 'src/app/core/utils/device.utils';
import { ScrollHideConfig } from 'src/app/shared/directives/scroll-hide.directive';
import { SortedDevicesPart } from '../../core/models/sortedDevicesPart.model';
import { AddComponent } from './components/add/add.component';

@Component({
  selector: 'app-devices',
  templateUrl: './devices.page.html',
  styleUrls: ['./devices.page.scss'],
})
export class DevicesPage implements OnInit {
  devices$: Observable<SortedDevicesPart[]> = null;
  private search$ = new BehaviorSubject('');
  headerScrollConfig: ScrollHideConfig = {
    cssProperty: 'margin-top',
    maxValue: 154,
  };

  constructor(
    private deviceService: DevicesService,
    private modalController: ModalController
  ) {}

  ngOnInit() {
    this.devices$ = this.deviceService.devices.pipe(
      map((x) => Array.from(x)),
      combineLatestWith(this.search$),
      map(([contacts, search]) =>
        contacts.filter(
          (y) =>
            y.name.toLowerCase().includes(search) ||
            y.room.toLowerCase().includes(search) ||
            y.type.toLowerCase().includes(search) ||
            y.cluster.toLowerCase().includes(search) ||
            y.manufacturer.toLowerCase().includes(search)
        )
      ),
      map((x) =>
        x.sort((a, b) => {
          let fa = a.name.toLowerCase(),
            fb = b.name.toLowerCase();

          if (fa < fb) {
            return -1;
          }
          if (fa > fb) {
            return 1;
          }
        })
      ),

      map(sortDevicesIntoLetterSegments)
    );
  }

  async onSearch(event) {
    this.search$.next(event.target.value.toLowerCase());
  }

  async openAdd() {
    const modal = await this.modalController.create({
      component: AddComponent,
      initialBreakpoint: 0.7,
      breakpoints: [0, 0.2, 0.7, , 0.8, 0.9, 1],
    });
    return await modal.present();
  }
}
