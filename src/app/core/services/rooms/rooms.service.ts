import { Injectable } from '@angular/core';

const key = 'smarthome_rooms';

@Injectable({
  providedIn: 'root',
})
export class RoomsService {
  private _rooms: Set<string>;
  constructor() {
    this._rooms = new Set(JSON.parse(localStorage.getItem(key) ?? '[]'));
  }

  get rooms() {
    return this._rooms;
  }

  exists(room: string) {
    return this._rooms.has(room);
  }

  add(room: string) {
    this._rooms.add(room);
  }
}
