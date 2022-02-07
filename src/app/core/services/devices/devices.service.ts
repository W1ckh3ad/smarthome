import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { Device } from '../../models/device.model';
import { Storage } from '@capacitor/storage';
const key = 'smarthome_devices';

const def: Device[] = [
  {
    name: 'Flurlampe eingang',
    room: 'Flur',
    type: 'Lampe',
    manufacturer: 'Phillips',
    cluster: 'Flurlampen',
  },
  {
    name: 'Stehlampe Flur',
    room: 'Flur',
    type: 'Lampe',
    manufacturer: 'Phillips',
    cluster: 'Flurlampen',
  },
  {
    name: 'Kühlschrank',
    room: 'Küche',
    type: 'Kühlschrank',
    manufacturer: 'Samsung',
    cluster: 'Küchengeräte',
  },
  {
    name: 'Bewegungssensor Eingang',
    room: 'Flur',
    type: 'Bewegungssensor',
    manufacturer: 'Homematic',
    cluster: 'Sicherheit',
  },
  {
    name: 'Klingel Eingang',
    room: 'Lobby',
    type: 'Klingel',
    manufacturer: 'Ring',
    cluster: 'Sicherheit',
  },
  {
    name: 'Bewässerung',
    room: 'Balkon',
    type: 'Bewässerung',
    manufacturer: 'Gardena',
    cluster: 'Pflanzenbewässerung',
  },
  {
    name: 'Steckdose Anlage',
    room: 'Wohnzimmer',
    manufacturer: 'Hama',
    type: 'Steckdose',
    cluster: 'Heimkinoanlage Wohnzimmer',
  },
  {
    name: 'Schalter Anlage',
    room: 'Wohnzimmer',
    manufacturer: 'Hama',
    type: 'Schalter',
    cluster: 'Heimkinoanlage Wohnzimmer',
  },
];

@Injectable({
  providedIn: 'root',
})
export class DevicesService {
  private _devices: BehaviorSubject<Set<Device>>;
  private safe;
  constructor() {
    console.log(localStorage);
    this._devices = new BehaviorSubject(new Set(def));
  }

  ngOnInit() {
    console.log('Start');
  }

  get devices() {
    return this._devices;
  }

  exists(device: Device) {
    return this._devices.value.has(device);
  }
  exists$(device: Device) {
    return this._devices.pipe(map((x) => x.has(device)));
  }

  add(device: Device) {
    if (this.exists(device)) {
      return;
    }
    this._devices.next(new Set([...this._devices.value, device]));
  }

  delete(device: Device) {
    const set = this._devices.value;
    set.delete(device);
    this._devices.next(set);
  }
}
