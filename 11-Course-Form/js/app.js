import { validator, inputs } from "./validatormodule.js";

//Variables
const form = document.querySelector("form");
//EventListeners
document.addEventListener("DOMContentLoaded", validator);
form.addEventListener("submit", addCourse);
//Functions

//Add a course
function addCourse(e) {
  e.preventDefault();
  const name = inputs[0].value;
  const course = inputs[1].value;
  const author = inputs[2].value;

  if (
    inputs[0].value === "" ||
    inputs[1].value === "" ||
    inputs[2].value === ""
  ) {
  } else {
    const customer = new Customer(name, course, author);
    const display = new Display();
    display.feedback(customer);
  }

  for (var i = 0; i < inputs.length; i++) {
    inputs[i].value = "";
  }
}

function Display() {
  this.name = document.getElementById("name");
  this.course = document.getElementById("course");
  this.author = document.getElementById("author");
  this.customers = document.querySelector(".customer-list");
}

Display.prototype.addCustomer = function (customer) {
  const random = this.getRandom();
  const div = document.createElement("div");
  div.classList.add("col-11", "mx-auto", "col-md-6", "my-3", "col-lg-4");
  div.innerHTML = `<div class="card text-left">
     <img src="./img/cust-${random}.jpg" class="card-img-top" alt="">
     <div class="card-body">
      <!-- customer name -->
      <h6 class="text-capitalize "><span class="badge badge-warning mr-2">name :</span><span id="customer-name">${customer.name}</span></h6>
      <!-- end of customer name -->
      <!-- customer name -->
      <h6 class="text-capitalize my-3"><span class="badge badge-success mr-2">course :</span><span id="customer-course">
        ${customer.course}
       </span></h6>
      <!-- end of customer name -->
      <!-- customer name -->
      <h6 class="text-capitalize"><span class="badge badge-danger mr-2">author :</span><span id="course-author">${customer.author}</span></h6>
      <!-- end of customer name -->
     </div>
    </div>`;
  this.customers.appendChild(div);
};

Display.prototype.getRandom = function () {
  let random = Math.floor(Math.random() * 5 + 1);
  return random;
};

// I kept the loading function from the original app.js to practice
// Without this function display.addCustomer(customer) should be replaced into addCourse(e) function
Display.prototype.feedback = function (customer) {
  const feedback = document.querySelector(".feedback");
  const loading = document.querySelector(".loading");

  feedback.classList.add("showItem", "alert", "alert-success");
  loading.classList.add("showItem");

  const self = this;

  setTimeout(function () {
    feedback.classList.remove("showItem", "alert", "alert-success");
    loading.classList.remove("showItem");
    self.addCustomer(customer);
  }, 1000);
};
// Loading end

function Customer(name, course, author) {
  this.name = name;
  this.course = course;
  this.author = author;
}
