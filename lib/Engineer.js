// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(name, id, email, github) {
        //name, id and email parameters has already been initialised in Employee.js
        super(name, id, email)
        this.github = github;
    }

    getGithub() {
        return this.github;
    }
}

module.exports = Engineer;
