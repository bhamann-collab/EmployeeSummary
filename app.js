const inquirer = require('inquirer');
const Intern = require('./lib/Intern');
const Engineer = require('./lib/Engineer');
const Manager = require('./lib/Manager');

function managerInput() {
  return new Promise(resolve => {
    inquirer
  .prompt([
      {
        name: 'name',
        message: 'Name of manager',
        default: 'Brock'
      },
      {
        name: 'id',
        message: 'ID of manager',
        default: '1234'
      },
      {
        name: 'email',
        message: 'email of manager',
        default: 'example@example.com'
      },
      {
        name: 'office',
        message: 'office number of manager',
        default: '789'
      },
      {
        name: 'No',
        message: 'Number of employees',
        default: '3'
      }
  ])
  .then(answers => {
      resolve(answers)
  })
  .catch(error => {
    if(error.isTtyError) {
        
      // Prompt couldn't be rendered in the current environment
    } else {
        
      // Something else when wrong
    }
  });
  })
}

function engineerInput() {
  return new Promise(resolve => {
    inquirer
  .prompt([
      {
        name: 'name',
        message: 'Name of engineer',
        default: 'Brock'
      },
      {
        name: 'id',
        message: 'ID of engineer',
        default: '1234'
      },
      {
        name: 'email',
        message: 'email of engineer',
        default: 'example@example.com'
      },
      {
        name: 'github',
        message: 'github username of engineer',
        default: 'gitty'
      }
  ])
  .then(answers => {
      resolve(answers)
  })
  .catch(error => {
    if(error.isTtyError) {
        
      // Prompt couldn't be rendered in the current environment
    } else {
        
      // Something else when wrong
    }
  });
  })
}

function internInput() {
  return new Promise(resolve => {
    inquirer
  .prompt([
      {
        name: 'name',
        message: 'Name of intern',
        default: 'Brock'
      },
      {
        name: 'id',
        message: 'ID of intern',
        default: '1234'
      },
      {
        name: 'email',
        message: 'email of intern',
        default: 'example@example.com'
      },
      {
        name: 'school',
        message: 'school name of intern',
        default: 'gitty'
      }
  ])
  .then(answers => {
      resolve(answers)
  })
  .catch(error => {
    if(error.isTtyError) {
        
      // Prompt couldn't be rendered in the current environment
    } else {
        
      // Something else when wrong
    }
  });
  })
}

function whichEmployee(number) {
  return new Promise(resolve => {
    inquirer
  .prompt([
      {
        type: 'list',
        name: 'employee',
        message: `Employee ${number} role in the company`,
        choices: [
          'Engineer',
          'Intern'
        ]
      }
  ])
  .then(answers => {
      resolve(answers)
  })
  .catch(error => {
    if(error.isTtyError) {
        
      // Prompt couldn't be rendered in the current environment
    } else {
        
      // Something else when wrong
    }
  });
  })
}



 async function main() {
  let managerInputs = await managerInput();
  let engineerArray = [];
  let internArray = [];

  let newManager = new Manager(managerInputs.name, managerInputs.id, managerInputs.email, managerInputs.office)
  console.log(newManager.getOfficeNumber());
  
  for(let i = 0; i < managerInputs.No; i++) {
    let employeeType = await whichEmployee(i+1);
    
    if(employeeType.employee === 'Engineer') {
      let engineerInputs = await engineerInput();
      let newEngineer = new Engineer(engineerInputs.name, engineerInputs.id, engineerInputs.email, engineerInputs.github)
      engineerArray.push(newEngineer)
    } else {
      let internInputs = await internInput();
      let newIntern = new Intern(internInputs.name, internInputs.id, internInputs.email, internInputs.school)
      internArray.push(newIntern)
    }
  }
  console.log(engineerArray);
  console.log(internArray);
}

main();