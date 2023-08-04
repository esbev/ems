const inquirer = require("inquirer");
const mysql = require("mysql2");

const db = mysql.createConnection(
  {
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'employees_db'
  },
  console.log(`Connected to employees_db.`)
);

let exit = false;

async function init(menuChoice) {
  while (!exit) {
    switch (menuChoice) {
      case "mainMenu":
        userInput = await mainMenu();
        console.log(userInput.choice);
        menuChoice = userInput.choice;
        break
      case "viewDepartments":
        tableChoice = "department";
        menuChoice = printTable(tableChoice);
        menuChoice = "mainMenu";
        break
      case "viewRoles":
        tableChoice = "roles";
        menuChoice = printTable(tableChoice);
        menuChoice = "mainMenu";
        break
      case "viewEmployees":
        tableChoice = "employees";
        menuChoice = printTable(tableChoice);
        menuChoice = "mainMenu";
        break
      case "addDepartment":
        addNewDepartment();
        menuChoice = "mainMenu";
        break
      case "addRole":
        addNewRole();
        menuChoice = "mainMenu";
        break
      case "addEmployee":
        addNewEmployee();
        menuChoice = "mainMenu";
        break
      case "updateEmployee":
        updateEmployeeRole();
        menuChoice = "mainMenu";
        break
      case "quit":
        exit = true;
        break
      default:
        // mainMenu();
        break
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
  return inquirer.prompt(mainMenu);
  // .then((input) => {
  //   return input.choice;
  // })
}

async function addNewDepartment() {
  console.log("add dept");

  let addDept = [
    {
      type: "input",
      name: "newDepartment",
      message: "Type the department you would like to add.",
    }
  ];
  // await inquirer.prompt(addDept)
  // .then((input) => {
  //   db.query(`INSERT INTO department(dept_name) VALUE(${input.newDepartment})`,
  //   function (err, results) {
  //     if (err) throw err;
  //   });
  //   console.log("Department Added");
  // });
  // return "mainMenu";
};

async function addNewRole() {
  console.log("add role");
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
  // await
  // inquirer.prompt(addRole)
  // .then((input) => {
  //   db.query(`INSERT INTO role(title, salary, department_id)
  //   + VALUE(${input.newRole}, ${input.salary}, ${input.deptId},)`,
  //   function (err, results) {
  //     if (err) throw err;
  //   });
  //   console.log("Department Added");
  // });
  // return "mainMenu";
};

async function addNewEmployee() {
  console.log("add employee");

  let addEmployee = [
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
    {
      input: "list",
      name: "managerID",
      message: "Type the ID of the manager for this employee.",
    },
  ];
  // await inquirer.prompt(addEmployee)
  // .then((input) => {
  //   db.query(`INSERT INTO employee(first_name, last_name, role_id, manager_id)
  //   + VALUE(${input.firstName}, ${input.lastName}, ${input.empRole}, ${input.managerID})`, 
  //   function (err, results) {
  //     if (err) throw err;
  //   });
  //   console.log("Employee Added");
  // });
  // return "mainMenu";
};

async function updateEmployeeRole() {
  console.log("Update");

  let newEmployeeRole = [
    {
      type: "input",
      name: "employeeId",
      message: "Enter employee ID to update",
    },
    {
      type: "input",
      name: "roleChoice",
      message: "Type the role ID for the new role.",
    },
  ];
  // await inquirer.prompt(newEmployeeRole)
  // .then((input) => {
  //   db.query(`UPDATE employee SET role_id = ${input.roleChoice} WHERE role_id = ${input.employeeId}`,
  //   function (err, results) {
  //     if (err) throw err;
  //   });
  //   console.log("Employee Updated");
  // });
  // return "mainMenu";
};

async function printTable(tableChoice) {
  console.log("print table");

  // await db.query(`SELECT * FROM ${tableChoice}`, function (err, results) {
  //   if (err) throw err;
  //   console.log(results);
  // });
  // return "mainMenu";
};


init("mainMenu");