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
      if (response.add === "Yes") {
        initPrompt();
      } else if (response.add === "No, exit application") {
        teamPush(team);
      }
    });
  }
  if (role.role === "Engineer") {
    inquirer.prompt(engineerQuestion).then(function (response) {
      createEngineer(response);
      console.log(team);
      if (response.add === "Yes") {
        initPrompt();
      } else if (response.add === "No, exit application") {
        teamPush(team);
      }
    });
  }
  if (role.role === "Manager") {
    inquirer.prompt(managerQuestion).then(function (response) {
      createManager(response);
      console.log(team);
      if (response.add === "Yes") {
        initPrompt();
      } else if (response.add === "No, exit application") {
        teamPush(team);
      }
    });
  }
}

function createIntern(response) {
  // const intern = new Intern(
  //   response.name,
  //   response.id,
  //   response.email,
  //   response.school
  // );

  const internCard = `<div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">${response.name}</h5>
    <h5 class="card-title">${response.id}</h5>
    <h5 class="card-title">${response.email}</h5>
    <h5 class="card-title">${response.school}</h5>
  </div>
</div>`;
  // team.push(intern);
  team.push(internCard);
}

function createEngineer(response) {
  // const engineer = new Engineer(
  //   response.name,
  //   response.id,
  //   response.email,
  //   response.github
  // );
  const engineerCard = `<div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">${response.name}</h5>
    <h5 class="card-title">${response.id}</h5>
    <h5 class="card-title">${response.email}</h5>
    <h5 class="card-title">${response.github}</h5>
  </div>
</div>`;
  // team.push(engineer);
  team.push(engineerCard);
}

function createManager(response) {
  // const manager = new Manager(
  //   response.name,
  //   response.id,
  //   response.email,
  //   response.number
  // );
  const managerCard = `<div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">${response.name}</h5>
    <h5 class="card-title">${response.id}</h5>
    <h5 class="card-title">${response.email}</h5>
    <h5 class="card-title">${response.number}</h5>
  </div>
</div>`;
  // team.push(manager);
  team.push(managerCard);
}

function teamPush(team) {
  console.log(team);
  fs.appendFileSync("./output/main.html", `${team}`);
}

function initializeHTML() {
  fs.readFile("./template/template.html", function readTemplate(err, data) {
    if (err) {
      throw err;
    } else {
      fs.writeFile("./output/main.html", data, function (err) {
        if (err) {
          throw err;
        }
      });
    }
  });
}

initializeHTML();
initPrompt();
