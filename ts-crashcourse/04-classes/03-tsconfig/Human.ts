class Human {
    
    private _firstName: string;
    private _lastName: string;

    constructor(firstName: string, lastName: string) {
        this._firstName = firstName;
        this._lastName = lastName;
    }

    // accessors
    public get firstName(): string {
        return this._firstName;
    }

    public get lastName(): string {
        return this._lastName;
    }

    // mutators
    public set firstName(firstName: string) {
        this._firstName = firstName;
    }

    public set lastName(lastName: string) {
        this._lastName = lastName;
    }
}

let myHuman = new Human("Jaxon", "Adams");

console.log(myHuman.firstName);
console.log(myHuman.lastName);