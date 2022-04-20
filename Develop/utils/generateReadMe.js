const fs = require('fs');

function writeFile(data){
  return `
  # ${data.projectName}

  ## Description
  ${data.about}

  ## Installation 
  ${data.installation}

  ## Usage
  ${data.usage}

  ## Credit
  ${data.contributing}

  ## Tests
  ${data.test}

  ## License
  ![badge](https://img.shields.io/badge/license-${data.license}-red)

  ## Here is the link for the project 
  ${data.linkInput}

  ## If you have any questions, please contact me at my email below
  ${data.emai}
  `  
  ;
}
module.exports=writeFile;