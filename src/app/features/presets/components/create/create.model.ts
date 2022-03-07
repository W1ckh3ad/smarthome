export class Create {
  constructor(
    public name: string,
    public id: string,
    public devices: string[] = []
  ) {}
}
