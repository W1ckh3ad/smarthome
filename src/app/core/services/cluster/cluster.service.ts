import { Injectable } from '@angular/core';

const key = 'smarthome_cluster';

@Injectable({
  providedIn: 'root',
})
export class ClusterService {
  private _cluster: Set<string>;
  constructor() {
    this._cluster = new Set(JSON.parse(localStorage.getItem(key) ?? '[]'));
  }

  get cluster() {
    return this._cluster;
  }

  exists(cluster: string) {
    return this._cluster.has(cluster);
  }

  add(cluster: string) {
    this._cluster.add(cluster);
  }
}
