"use strict";
class Human {
    constructor(firstName, lastName) {
        this._firstName = firstName;
        this._lastName = lastName;
    }
    // accessors
    get firstName() {
        return this._firstName;
    }
    get lastName() {
        return this._lastName;
    }
    // mutators
    set firstName(firstName) {
        this._firstName = firstName;
    }
    set lastName(lastName) {
        this._lastName = lastName;
    }
}
let myHuman = new Human("Jaxon", "Adams");
console.log(myHuman.firstName);
console.log(myHuman.lastName);
