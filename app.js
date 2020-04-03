const inquirer = require("inquirer");
const Intern = require("./lib/Intern");
const Engineer = require("./lib/Engineer");
const Manager = require("./lib/Manager");
const fs = require("fs");

const initQuestions = [
  { type: "input", name: "name", message: "Enter your name" },
  { type: "any", name: "id", message: "Enter your id number" },
  {
    type: "input",
    name: "email",
    message: "Enter your email"
  },
  {
    type: "list",
    name: "role",
    message: "Enter your role on the team",
    choices: ["Intern", "Engineer", "Manager"]
  }
];

const internQuestion = [
  { type: "input", name: "school", message: "Enter your name of your school" }
];

const managerQuestion = [
  { type: "any", name: "number", message: "Enter your office number" }
];

const engineerQuestion = [
  { type: "input", name: "github", message: "Enter your github name" }
];

function initPrompt() {
  inquirer.prompt(initQuestions).then(function(role) {
    rolePrompts(role);
  });
}

function rolePrompts(role) {
  if (role.role === "Intern") {
    inquirer.prompt(internQuestion).then(function(response) {
      internSchool(response);
    });
  }
  if (role.role === "Engineer") {
    inquirer.prompt(engineerQuestion).then(function(response) {
      engineerGithub(response);
    });
  }
  if (role.role === "Manager") {
    inquirer.prompt(managerQuestion).then(function(response) {
      managerNumber(response);
    });
  }
}

function internSchool(response) {
  console.log("school: " + JSON.stringify(response.school));
}

function engineerGithub(response) {
  console.log("github name is: " + JSON.stringify(response.github));
}

function managerNumber(response) {
  console.log("office number is: " + JSON.stringify(response.number));
}

initPrompt();
