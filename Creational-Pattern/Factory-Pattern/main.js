const root = document.querySelector(".root");

function Developer(name) {
  this.name = name;
  this.type = "Developer";
}

function Tester(name) {
  this.name = name;
  this.type = "Tester";
}

function EmployeeFactory() {
  this.create = (name, type) => {
    switch (type) {
      case 1:
        return new Developer(name);
      case 2:
        return new Tester(name);
    }
  };
}

function say() {
  var li = document.createElement("li");
  li.setAttribute("class", "list-el");
  li.textContent = `Hi, I am ${this.name} and I am a ${this.type}`;

  root.appendChild(li);
}

const employeeFactory = new EmployeeFactory();
const employees = [];

employees.push(employeeFactory.create("Adam", 1));
employees.push(employeeFactory.create("Markus", 2));
employees.push(employeeFactory.create("Jamie", 1));
employees.push(employeeFactory.create("John", 1));

employees.forEach((employee) => {
  say.call(employee);
});
