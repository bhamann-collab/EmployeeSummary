// TODO: Write code to define and export the Employee class
class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getName() {
        return this.name;
    }

    getId() {
        return this.id;
    }

    getRole() {
        return this.constructor.name;
    }
}

let myEmployee = new Employee("Dave", 234, "dave@dave.com")

console.log(myEmployee.getRole())