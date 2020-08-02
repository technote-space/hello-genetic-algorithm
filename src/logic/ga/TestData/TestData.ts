export class TestData {
  public constructor(private _target: string) {
  }

  public get target(): string {
    return this._target;
  }
}
