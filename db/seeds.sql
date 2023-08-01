INSERT INTO department (dept_name)
VALUES
("Sales"),
("Engineering"),
("Finance"),
("Legal");

INSERT INTO role (title, salary, department_id)
VALUES
("Software Engineer", "120000", "2"),
("Senior Software Engineer", "150000", "2"),
("Account Manager", "160000", "3"),
("Accountant", "125000", "3"),
("Legal Team Lead", "250000", "4"),
("Lawyer", "190000", "4"),
("Sales Manager", "100000", "1"),
("Salesperson", "80000", "1");

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
("John", "Snow", "7", "0"),
("Mikey", "Chan", "8", "1"),
("Ashley", "Rodman", "2", "0"),
("Melissa", "Turney", "1", "3"),
("James", "Brown", "3", "0"),
("Albert", "Hawking", "4", "5"),
("Stephen", "Einstein", "5", "0"),
("Sandy", "Zapato", "6", "7");