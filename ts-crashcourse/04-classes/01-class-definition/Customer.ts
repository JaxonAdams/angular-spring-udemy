class Customer {

    firstName: string;
    lastName: string;

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
}

// creating an instance
let myCustomer = new Customer("Jaxon", "Adams");

console.log(`Hello, customer "${myCustomer.firstName} ${myCustomer.lastName}"!`);