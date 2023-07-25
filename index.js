const inquirer = require("inquirer");
const mysql = require("mysql2");

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'employees_db'
  },
  console.log(`Connected to the employees_db database.`)
);

async function init() {
  await inquirer
    .prompt(questions)
    .then((input) => {
      switch (input.choice) {
        case "ALL_DEPARTMENTS":
          tableChoice = "department";
          printQuery(tableChoice);
          break;
        case "ALL_ROLES":
          tableChoice = "roles";
          printQuery(tableChoice);
          break;
        case "ALL_EMPLOYEES":
          tableChoice = "employees";
          printQuery(tableChoice);
          break;
        case "ADD_DEPARTMENT":
          // db.addDepartment
          break;
        default:
          break;
      }
    });
};

let questions = [
  {
    type: "list",
    name: "choice",
    message: "What would you like to do?",
    choices: [
      { choice: "View all departments", value: "ALL_DEPARTMENTS" },
      { choice: "View all roles", value: "ALL_ROLES" },
      { choice: "View all employees", value: "ALL_EMPLOYEES" },
      { choice: "Add a department", value: "ADD_DEPARTMENT" },
      { choice: "Add a role", value: "ADD_ROLE" },
      { choice: "Add an employee", value: "ADD_EMPLOYEE" },
      { choice: "Update an employee", value: "UPDATE_EMPLOYEE" },
      { choice: "Quit", value: "QUIT" }
    ]
  }
];

function printQuery(tableChoice) {
  db.query('SELECT * FROM '+ tableChoice, function (err, results) {
    console.log(results);
  }); 
}


init();





//where employee.role = ? set to;
//where employee.manager = ? set to;
