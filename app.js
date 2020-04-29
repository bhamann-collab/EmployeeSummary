var inquirer = require('inquirer');


let str;
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
    /* Pass your questions in here */
  ])
  .then(answers => {
      console.info('Name is:', answers)
    // Use user feedback for... whatever!!
  })
  .catch(error => {
    if(error.isTtyError) {
        
      // Prompt couldn't be rendered in the current environment
    } else {
        
      // Something else when wrong
    }
  });