import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoadService {
  private _isReady = new BehaviorSubject(true);
  constructor() {}

  get isReady() {
    return this._isReady.value;
  }

  get isReady$() {
    return this._isReady;
  }

  set isReady(newVal: boolean) {
    this._isReady.next(newVal);
  }
}
