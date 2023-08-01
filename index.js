const inquirer = require("inquirer");
const mysql = require("mysql2");

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'employees_db'
  },
  console.log(`Connected to employees_db.`)
);

let exit = false;

async function init() {
  while (exit) {//menu choice goes back to main at end of each function of choices until quit/exit is true
    await inquirer
      .prompt(mainMenu)
      .then((input) => {
        switch (input.choice) {
          case "mainMenu":
            break;
          case "addDepartment":
            break;
          case "addRole":
            break;
          case "addEmployee":
            break;
          case "updateEmployee":
            break;
          case "quit":
            break;
          default:
            exit = true;
            break;
        }
      });
  }
  console.log("thank you for using EMS!")
};

let mainMenu = [
  {
    type: "list",
    name: "choice",
    message: "What would you like to do?",
    choices: [
      { name: "View all departments", value: "viewDepartments" },
      { name: "View all roles", value: "viewRoles" },
      { name: "View all employees", value: "viewEmployees" },
      { name: "Add a department", value: "addDepartment" },
      { name: "Add a role", value: "addRole" },
      { name: "Add an employee", value: "addEmployee" },
      { name: "Update an employee", value: "updateEmployee" },
      { name: "Quit", value: "quit" }
    ],
  }
];

let addDeptMenu = [
  {
    type: "input",
    name: "department",
    message: "What department would you like to add?",
  }
];

let addRoleMenu = [
  {
    type: "input",
    name: "role",
    message: "What Role would you like to add?",
  },
  {
    input: "list",
    name: "salary",
    message: "What is the salary for this role?",
  },
  {
    input: "list",
    name: "deptId",
    message: "What department does this role belong to?",
  },
];

let addEmpMenu = [
  {
    type: "input",
    name: "firstName",
    message: "Enter employee first name",
  },
  {
    type: "input",
    name: "lastName",
    message: "Enter employee last name",
  },
  {
    input: "list",
    name: "empRole",
    message: "What is this employee's role?",
  },
];

function tableSelection() {
  switch (input.choice) {
    case "viewDepartments":
      tableChoice = "department";
      printQuery(tableChoice);
      break;
    case "viewRoles":
      tableChoice = "roles";
      printQuery(tableChoice);
      break;
    case "viewEmployees":
      tableChoice = "employees";
      printQuery(tableChoice);
      break;
    default:
      break;
  }
  return;
}


function printQuery(tableChoice) {
  // db.query('SELECT * FROM '+ tableChoice, function (err, results) {
  //   console.log(results);
  // });
  console.log(tableChoice);
}


init();





//where employee.role = ? set to;
//where employee.manager = ? set to;
