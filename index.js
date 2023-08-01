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

async function init(menuChoice) {
  while (!exit) {//menu choice goes back to main at end of each function of choices until quit/exit is true
    switch (menuChoice) {
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
      case "addDepartment":
        addNewDepartment();
        break;
      case "addRole":
        break;
      case "addEmployee":
        break;
      case "updateEmployee":
        break;
      case "quit":
        exit = true;
        break;
      default:
        //mainMenu
        break;
    }
  }
  console.log("Thank you for using EMS!")
};

async function mainMenu() {

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
        { name: "Update an employee role", value: "updateEmployee" },
        { name: "Quit", value: "quit" }
      ],
    }
  ];

}

async function addNewDepartment() {

  let addDept = [
    {
      type: "input",
      name: "newDepartment",
      message: "Type the department you would like to add.",
    }
  ];
  await inquirer.prompt(addDept)
  .then((input) => {
    db.query(`INSERT INTO department(dept_name) VALUE(${input.newDepartment})`);
    console.log("Department Added");
    return "mainMenu";
  })

};

//todo: finish
async function addNewRole() {

  let addRole = [
    {
      type: "input",
      name: "newRole",
      message: "Type the role you would like to add.",
    },
    {
      input: "list",
      name: "salary",
      message: "What is the salary for this role?",
    },
    {
      input: "list",
      name: "deptId",
      message: "Type the ID of the department for this role.",
    },
  ];
}

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
    message: "Type the ID for the role for this employee.",
  },
];

let updateEmpRoleMenu = [
  {
    type: "input",
    name: "employeeId",
    message: "Enter employee ID to update",
  },
  {
    type: "input",
    name: "roleChoice",
    message: "Type the ID for the new role.",
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
  db.query(`SELECT * FROM ${tableChoice}`, function (err, results) {
    console.log(results);
  });
}


init();





//where employee.role = ? set to;
//where employee.manager = ? set to;
