import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, Observable, switchMap } from 'rxjs';
import { Device } from 'src/app/core/models/device.model';
import { DevicesService } from 'src/app/core/services/devices/devices.service';

@Component({
  selector: 'app-device',
  templateUrl: './device.page.html',
  styleUrls: ['./device.page.scss'],
})
export class DevicePage implements OnInit {
  device$: Observable<Device> = null;
  deviceId$: Observable<string> = null;
  constructor(
    private activeRoute: ActivatedRoute,
    private devicesService: DevicesService
  ) {}

  ngOnInit() {
    this.deviceId$ = this.activeRoute.paramMap.pipe(map((x) => x.get('id')));
    this.device$ = this.activeRoute.paramMap.pipe(
      map((x) => x.get('id')),
      switchMap((x) => this.devicesService.getDevice$(x))
    );
  }
}
