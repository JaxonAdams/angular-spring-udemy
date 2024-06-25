import { Shape } from "./Shape";

export class Rectangle extends Shape {
    
    private _width: number;
    private _length: number;

    constructor(x: number, y: number, width: number, length: number) {
        super(x, y);
        this._width = width;
        this._length = length;
    }

    // accessors / mutators
    get width(): number {
        return this._width;
    }

    get length(): number {
        return this._length;
    }

    set width(width: number) {
        this._width = width;
    }

    set length(length: number) {
        this._length = length;
    }

    getInfo(): string {
        return `${super.getInfo()}, width: ${this._width}, length: ${this._length}`
    }

    calculateArea(): number {
        return this._length * this.width;
    }

}