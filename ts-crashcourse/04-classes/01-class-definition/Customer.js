var Customer = /** @class */ (function () {
    function Customer(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    return Customer;
}());
// creating an instance
var myCustomer = new Customer("Jaxon", "Adams");
console.log("Hello, customer \"".concat(myCustomer.firstName, " ").concat(myCustomer.lastName, "\"!"));
