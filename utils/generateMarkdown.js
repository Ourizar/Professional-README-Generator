// Function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(data) {
  const licenseType = data.license[0];
  let licenseString = '';
  switch(licenseType){
    case 'MIT':
      licenseString = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
      break;
    case 'APACHE 2.0':
      licenseString = '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
      break;
    case 'GPL 3.0':
      licenseString = '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
      break;
    case 'BSD 3':
      licenseString = '[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)';
      break;
    default:
      licenseString;
  }
    return licenseString;
};



// Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

## Description
${data.description}  

## Motivation
${data.motivation}

## License
${renderLicenseBadge(data)}

## Dependencies
${data.dependencies}

## Tests
${data.tests}

## GitHub
${data.github}

## Usage
${data.need2Know}

## Contributing
${data.contributing}

`;
}

module.exports = generateMarkdown;
