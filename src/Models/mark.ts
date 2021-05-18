export default class Mark {
  constructor(
    public mark: number,
    public value: number,
    public subject: string
  ) {
    if (value >= 100) this.value = 100;
    else if (value < 0) this.value = 0;
  }
}
