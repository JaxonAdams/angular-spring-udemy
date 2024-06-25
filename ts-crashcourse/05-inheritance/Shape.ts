export abstract class Shape {

    constructor(private _x: number, private _y: number) {}

    // accessors / mutators
    get x(): number {
        return this._x;
    }

    get y(): number {
        return this._y;
    }

    set x(x: number) {
        this._x = x;
    }

    set y(y: number) {
        this._y = y;
    }

    getInfo(): string {
        return `x: ${this._x}, y: ${this._y}`
    }

    abstract calculateArea(): number;

}