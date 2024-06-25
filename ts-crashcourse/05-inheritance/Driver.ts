import { Shape } from "./Shape";
import { Circle } from "./Circle";
import { Rectangle } from "./Rectangle";

let myCircle = new Circle(5, 2, 3);
let myRectangle = new Rectangle(4, 3, 2, 1);

// declare an array of shapes -- can hold subclasses of Shape
let shapes: Shape[] = [];

shapes.push(myCircle);
shapes.push(myRectangle);

for (let shape of shapes) {
    console.log(shape.getInfo());
    console.log(`AREA = ${shape.calculateArea()}`);
    console.log();
}