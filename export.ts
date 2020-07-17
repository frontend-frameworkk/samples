export class Point {
  //to access the class somewhere else we need to specify using export keyword
  constructor(private _x?: number, private _y?: number) {}
  draw() {
    console.log(this._x + "and" + this._y);
  }
}
