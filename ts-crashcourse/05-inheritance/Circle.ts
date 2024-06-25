import { Shape } from "./Shape";

export class Circle extends Shape {

    private _radius: number;

    constructor(x: number, y: number, radius: number) {
        super(x, y);
        this._radius = radius;
    }

    // accessors / mutators
    get radius(): number {
        return this._radius;
    }

    set radius(radius: number) {
        this._radius = radius;
    }

    getInfo(): string {
        return `${super.getInfo()}, radius: ${this._radius}`
    }

    calculateArea(): number {
        return Math.PI * Math.pow(this._radius, 2);
    }

}