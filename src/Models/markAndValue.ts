export default class MarkAndValue {
  constructor(
    public mark: number,
    public value: number,
    public wasAddedLater: boolean = false
  ) {}
}
