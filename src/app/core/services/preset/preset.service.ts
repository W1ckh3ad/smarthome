import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Preset } from '../../models/preset.model';

@Injectable({
  providedIn: 'root',
})
export class PresetService {
  _presets = new BehaviorSubject<Preset[]>([]);
  constructor() {}

  addOrEdit(preset: Preset) {
    let current = this._presets.value;
    const index = current.findIndex((x) => x.id === preset.id);
    if (index > -1) {
      current.splice(index, 1, preset);
    }
    this._presets.next(index > -1 ? [...current] : [...current, preset]);
  }

  delete(preset: Preset) {
    let current = this._presets.value;
    const index = current.findIndex((x) => x.id === preset.id);
    if (index > -1) {
      current.splice(index, 1);
    }
    this._presets.next([...current]);
  }

  get presets() {
    return this._presets.value;
  }

  get presets$() {
    return this._presets;
  }
}
