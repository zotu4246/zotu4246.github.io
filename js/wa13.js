function print(n, obj) {
  console.log(`Problem ${n}`, JSON.parse(JSON.stringify(obj)));
}

//Pronlem 1 - create JSON
const employees = [
  {
    firstName: "Sam",
    department: "Teach",
    designation: "Manager",
    salary: 40000,
    raiseEligible: true,
  },
  {
    firstName: "Mary",
    department: "Finance",
    designation: "Trainee",
    salary: 18500,
    raiseEligible: true,
  },
  {
    firstName: "Bill",
    department: "HR",
    designation: "Execuitive",
    salary: 21200,
    raiseEligible: false,
  },
];
print(1, employees);

//Problem 2 - Create JSON for the company
const company = {
  companyName: "Tech Starts",
  website: "www.techstars.site",
  employees: employees,
};

print(2, company);

//Problem 3 - adding an employee
const newEmployee = {
  ffirstName: "Anna",
  department: "Tech",
  designation: "Executitve",
  salary: 25600,
  raiseEligible: false,
};

company.employees.push(newEmployee);

print(3, employees);

//Problem 4 - calculate total slary for all company members
let total = 0;
for (const employee of employees) {
  total += employee["salary"];
}

print(4, total);

//Problem 5 - update salary for eligible employees

for (const employee of employees) {
  if (employee["raiseEligible"] == true) {
    employee["salary"] *= 1.1;
    employee["raiseEligible"] = false;
  }
}

print(5, employees);

//Problem 6- Update JSON for work form home
const employeeWFH = ["Anna", "Sam"];
for (const employee of employees) {
  let flag = false;
  for (const emplyeeName of employeeWFH) {
    if (emplyeeName.firstName == emplyeeName) {
      flag = true;
      break;
    }
  }
  employee.WFH = flag;
}
print(6, employees);
