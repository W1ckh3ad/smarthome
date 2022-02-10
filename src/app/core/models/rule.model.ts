import { Device } from "./device.model";

export class Rule {
  constructor(
    public name: string,
    public id: string,
    public trigger: Device,
    public event: Device
  ) {}
}
