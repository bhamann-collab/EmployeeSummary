// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
var Employee = require("./Employee")

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        //name, id and email parameters has already been initialised in Employee.js
        super(name, id ,email)
        this.officeNumber = officeNumber;
    }

    getOfficeNumber() {
        return this.officeNumber;
    }
}

module.exports = Manager;