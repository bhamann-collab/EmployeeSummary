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
        message: 'Your name?',
        default: 'Brock'
      },
      {
        name: 'id',
        message: 'Your ID?',
        default: '1234'
      },
      {
        name: 'email',
        message: 'Your email?',
        default: 'example@example.com'
      },
      {
        name: 'No',
        message: 'Number of employees',
        default: '3'
      }
  ])
  .then(answers => {
      resolve(answers)
    // Use user feedback for... whatever!!
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
  console.log(`Hello you absolute ${managerInputs.name}`)
}

main();