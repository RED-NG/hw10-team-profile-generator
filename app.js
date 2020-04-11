const inquirer = require("inquirer");
const Intern = require("./lib/Intern");
const Engineer = require("./lib/Engineer");
const Manager = require("./lib/Manager");
const fs = require("fs");

const team = [];

const initQuestion = [
  {
    type: "list",
    name: "role",
    message: "Add another person to the team?",
    choices: ["Intern", "Engineer", "Manager", "No, exit application"],
  },
];

const internQuestion = [
  { type: "input", name: "name", message: "Enter the intern's name" },
  { type: "any", name: "id", message: "Enter the intern's id number" },
  {
    type: "input",
    name: "email",
    message: "Enter the intern's email",
  },
  {
    type: "input",
    name: "school",
    message: "Enter the name of the intern's school",
  },
  {
    type: "list",
    name: "add",
    message: "Would you like to add another employee to your team?",
    choices: ["Yes", "No, exit application"],
  },
];

const managerQuestion = [
  { type: "input", name: "name", message: "Enter the manager's name" },
  { type: "any", name: "id", message: "Enter the manager's id number" },
  {
    type: "input",
    name: "email",
    message: "Enter your email",
  },
  { type: "any", name: "number", message: "Enter the manager's office number" },
  {
    type: "list",
    name: "add",
    message: "Would you like to add another employee to your team?",
    choices: ["Yes", "No, exit application"],
  },
];

const engineerQuestion = [
  { type: "input", name: "name", message: "Enter your name" },
  { type: "any", name: "id", message: "Enter your id number" },
  {
    type: "input",
    name: "email",
    message: "Enter your email",
  },
  { type: "input", name: "github", message: "Enter your github name" },
  {
    type: "list",
    name: "add",
    message: "Would you like to add another employee to your team?",
    choices: ["Yes", "No, exit application"],
  },
];

function initPrompt() {
  inquirer.prompt(initQuestion).then(function (role) {
    rolePrompts(role);
  });
}

function rolePrompts(role) {
  if (role.role === "Intern") {
    inquirer.prompt(internQuestion).then(function (response) {
      createIntern(response);
      console.log(team);
    });
  }
  if (role.role === "Engineer") {
    inquirer.prompt(engineerQuestion).then(function (response) {
      createEngineer(response);
      console.log(team);
    });
  }
  if (role.role === "Manager") {
    inquirer.prompt(managerQuestion).then(function (response) {
      createManager(response);
      console.log(team);
      if (response.add === "Yes") {
        initPrompt();
      } else {
        createManager(response);
      }
    });
  }
}

function createIntern(response) {
  // console.log("Intern's school " + JSON.stringify(response.school));
  // console.log("Intern's name " + JSON.stringify(response.name));
  // console.log("Intern's id " + JSON.stringify(response.id));
  // console.log("Intern's email: " + JSON.stringify(response.email));

  const intern = new Intern(
    response.school,
    response.name,
    response.id,
    response.email
  );
  team.push(intern);
}

function createEngineer(response) {
  // console.log("Engineer's github name is: " + JSON.stringify(response.github));
  // console.log("Engineer's name " + JSON.stringify(response.name));
  // console.log("Engineer's id " + JSON.stringify(response.id));
  // console.log("Engineer's email: " + JSON.stringify(response.email));

  const engineer = new Engineer(
    response.github,
    response.name,
    response.id,
    response.email
  );
  team.push(engineer);
}

function createManager(response) {
  // console.log("Manager's office number is: " + JSON.stringify(response.number));
  // console.log("Manager's name " + JSON.stringify(response.name));
  // console.log("Manager's id " + JSON.stringify(response.id));
  // console.log("Manager's email: " + JSON.stringify(response.email));
  const manager = new Manager(
    response.number,
    response.name,
    response.id,
    response.email
  );
  team.push(manager);
}

initPrompt();
