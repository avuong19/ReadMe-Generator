//Include packages needed for this application
const inquirer = require ("inquirer");
const fs = require ("fs");

//Create an array of questions for user input
const promptUser=()=>{
    return inquirer.prompt([
        {
            type: 'input',
            name: 'projectName',
            message: 'What is your project name/ title? (Required)',
            validate: projectnameInput => {
              if (projectnameInput) {
                return true;
              } else {
                console.log('Please enter your project name/title!');
                return false;
              }
            }
        },
        {
            type: 'input',  
            name: 'about',
            message: 'Provide a description for your project',
        },
        {
            type: 'input',
            name: 'installation',
            message:'Please enter installation instruction, if any'
        },
        {
            type: 'input',
            name: 'usage',
            message:'Please enter the usage of this project'
        },
        {
            type: 'input',
            name: 'contributing',
            message:'List all the contributers to this project'
        },
        {
            type: 'input',
            name: 'test',
            message:'Enter tests for your application and provide example on how to run them here '
        },
        {
            type: 'input',
            name: 'license',
            message:'Enter the license that you use for your project here'
        },
        {
            type: 'input',
            name: 'link',
            message: 'Enter the GitHub link to your project. (Required)',
            validate: linkInput => {
              if (linkInput) {
                return true;
              } else {
                console.log('You need to enter a project GitHub link!');
                return false;
              }
            }
          },

    ])
}

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
