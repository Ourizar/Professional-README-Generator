// Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const generateMarkdown = require('./utils/generateMarkdown');

//Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is your project title?',
        name: 'title',
    },
    {
        type: 'input',
        message: 'What is a good description of your project?',
        name: 'description',
    },
    {
        type: 'input',
        message: 'What was your motivation?',
        name: 'motivation',
    },
    {
        type: 'checkbox',
        message: 'Which license did you use for this repository?',
        choices: ["MIT",  "APACHE 2.0", "GPL 3.0", "BSD 3", "None"],
        name: 'license',
    },
    {
        type: 'input',
        message: 'What command should be run to install dependencies?',
        default: 'npi i',
        name: 'dependencies',
    },
    {
        type: 'input',
        message: 'What command should be run to run tests?',
        default: 'npm test',
        name: 'tests',
    },
    {
        type: 'input',
        message: 'What is your GitHub username?',
        name: 'github',
    },
    {
        type: 'input',
        message: 'What does the user need to know about using the repo?',
        name: 'need2Know',
    },
    {
        type: 'input',
        message: 'What does the user need to know about contributing to the repo?',
        name: 'contributing',
    },
];

// Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(),fileName),data)
}

// Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((responses) => {
        writeToFile('README.md', generateMarkdown({...responses}
        ))
    })
}

// Function call to initialize app
init();
// ${renderLicenseBadge(data)}