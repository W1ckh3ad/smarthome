import { Device } from "./device.model";

export class Preset {
  constructor(
    public name: string,
    public id: string,
    public devices: Device[] = [],
  ) {}
}
