export class Device {
  constructor(
    public id: string,
    public name: string,
    public manufacturer: string,
    public type: string,
    public room?: string,
    public cluster?: string
  ) {}
}
