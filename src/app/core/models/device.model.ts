export class Device {
  constructor(
    public name: string,
    public manufacturer: string,
    public type: string,
    public room?: string,
    public cluster?: string
  ) {}
}
