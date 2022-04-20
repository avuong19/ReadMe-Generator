//Include packages needed for this application
const inquirer = require ("inquirer");
const fs = require ("fs");
const writeFile= require('./Develop/utils/generateReadMe');
const util = require("util");
const createFile=util.promisify(fs.writeFile);

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
          {
            type: 'input',
            name: 'link',
            message: 'Enter your email. (Required)',
            validate: email => {
              if (email) {
                return true;
              } else {
                console.log('You need to enter your email address!');
                return false;
              }
            }
          },
         

    ])
}

// TODO: Create a function to initialize app
 async function init() {
     try{
         const data =await promptUser();
         const writeReadMe = writeFile(data);
         await createFile('./dist/README.md', writeReadMe);
         console.log('File Created');
     }
     catch(err){
         console.log(err);
     }
 };
// Function call to initialize app
init();
