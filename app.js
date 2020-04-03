const inquirer = require("inquirer");
const Employee = require("./lib/Employee");
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

// Promise.all([initPrompt(), rolePrompts(role)]);

function initPrompt() {
  // await inquirer.prompt(managerQuestion).then(function(res) {
  //   console.log(res.number);
  // });
  inquirer.prompt(initQuestions).then(function(role) {
    rolePrompts(role);
  });
}

function rolePrompts(role) {
  if (role.role === "Intern") {
    inquirer.prompt(internQuestion).then(function(response) {
      roleCondition(response);
    });
  }
  if (role.role === "Engineer") {
    inquirer.prompt(engineerQuestion).then(function(response) {
      roleCondition(response);
    });
  }
  if (role.role === "Manager") {
    inquirer.prompt(managerQuestion).then(function(response) {
      roleCondition(response);
    });
  }
}

function roleCondition(response) {
  // if (response === "school") {
  //   console.log("school is: " + response);
  // }
  // if (response === "number") {
  //   console.log("number is: " + response);
  // }
  // if (response === "github") {
  //   console.log("github name is: " + github);
  // } else {
  console.log(response);
  // }
}

initPrompt();
