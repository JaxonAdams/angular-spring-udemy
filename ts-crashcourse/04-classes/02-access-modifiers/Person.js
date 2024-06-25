var Person = /** @class */ (function () {
    function Person(firstName, lastName) {
        this._firstName = firstName;
        this._lastName = lastName;
    }
    Object.defineProperty(Person.prototype, "firstName", {
        // accessors
        get: function () {
            return this._firstName;
        },
        // mutators
        set: function (firstName) {
            this._firstName = firstName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "lastName", {
        get: function () {
            return this._lastName;
        },
        set: function (lastName) {
            this._lastName = lastName;
        },
        enumerable: false,
        configurable: true
    });
    return Person;
}());
var myPerson = new Person("Jaxon", "Adams");
console.log(myPerson.firstName);
console.log(myPerson.lastName);
