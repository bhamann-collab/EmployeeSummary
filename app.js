const inquirer = require('inquirer');
var fs  = require('fs');
const Intern = require('./lib/Intern');
const Engineer = require('./lib/Engineer');
const Manager = require('./lib/Manager');

//Importing functions to obtain HTML templates
const getManagerTemplate = require('./templates/manager-template')
const getMainTemplate = require('./templates/main-template')
const getEngineerTemplate = require('./templates/engineer-template')
const getInternTemplate = require('./templates/intern-template')



function managerInput() {
  return new Promise(resolve => {
    inquirer
  .prompt([
      {
        name: 'name',
        message: 'Name of manager'
      },
      {
        name: 'id',
        message: 'ID of manager'
      },
      {
        name: 'email',
        message: 'email of manager'
      },
      {
        name: 'office',
        message: 'office number of manager'
      },
      {
        name: 'No',
        message: 'Number of employees'
      }
  ])
  .then(answers => {
      resolve(answers)
    })
  })
}

function engineerInput() {
  return new Promise(resolve => {
    inquirer
  .prompt([
      {
        name: 'name',
        message: 'Name of engineer'
      },
      {
        name: 'id',
        message: 'ID of engineer'
      },
      {
        name: 'email',
        message: 'email of engineer'
      },
      {
        name: 'github',
        message: 'github username of engineer'
      }
  ])
  .then(answers => {
      resolve(answers)
    })
  })
}

function internInput() {
  return new Promise(resolve => {
    inquirer
  .prompt([
      {
        name: 'name',
        message: 'Name of intern'
      },
      {
        name: 'id',
        message: 'ID of intern'
      },
      {
        name: 'email',
        message: 'email of intern'
      },
      {
        name: 'school',
        message: 'school name of intern'
      }
  ])
  .then(answers => {
      resolve(answers)
    })
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
  })
}

//Adding an engineer template to member list template
function addEngineer(newMember, currentMembers) {
  newHtml = getEngineerTemplate(newMember)
  let theSquad = `${currentMembers} \n ${newHtml}`

  return theSquad;
}

//Adding an intern template to member list template
function addIntern(newMember, currentMembers) {
  newHtml = getInternTemplate(newMember)
  let theSquad = `${currentMembers} \n ${newHtml}`

  return theSquad;
}


 async function main() {
  let managerInputs = await managerInput();
  let engineerArray = [];
  let internArray = [];
  let htmlTeam = ``

  let newManager = new Manager(managerInputs.name, managerInputs.id, managerInputs.email, managerInputs.office)
  
  //The number of employees that the manager selected will be the number of employees templates that need to be created
  for(let i = 0; i < managerInputs.No; i++) {
    let employeeType = await whichEmployee(i+1);
    
    //Creating Engineer and Intern Objects
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

  //Populating engineer HTML templates first  
  for (var i = 0; i < engineerArray.length; i++) {
    htmlTeam = addEngineer(engineerArray[i], htmlTeam)
  }

   //Populating intern HTML templates second
  for (var i = 0; i < internArray.length; i++) {
    htmlTeam = addIntern(internArray[i], htmlTeam)
  }

  //Adding the manager HTML template on the top of the list
  htmlTeam = `${getManagerTemplate(newManager)} \n ${htmlTeam}`
  htmlTeam = getMainTemplate(htmlTeam)


  //Once completed, the file is located in the output directory
  fs.writeFile('./output/index.html', htmlTeam, (error) => {console.log(error)})
}

main();