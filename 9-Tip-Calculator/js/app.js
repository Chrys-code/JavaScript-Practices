//Variables
const inputs = document.querySelectorAll("input"); //dev note: input price, input person, input button
const form = document.querySelector("form");
const resultsDOM = document.querySelector(".results");

//EventListeners
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const serviceTip = document.querySelector("#input-service").value;
  const billed = new BillObject(inputs[0].value, serviceTip, inputs[1].value);
  billed.calculate();
});

class BillObject {
  constructor(price, tip, person) {
    this.price = price;
    this.tip = tip;
    this.person = person;
  }
  calculate() {
    //Calculate Tip Value
    let tipValue = 0;
    if (this.tip == "1") {
      tipValue = 0.2;
    } else if (this.tip == "2") {
      tipValue = 0.1;
    } else {
      tipValue = 0;
    }
    var totalTip = this.price * tipValue;
    let answerTip = document.querySelector("#tip-amount");
    answerTip.textContent = totalTip;

    //Calculate Price
    var totalPrice = parseInt(this.price) + parseInt(totalTip);
    let answerTotal = document.querySelector("#total-amount");
    answerTotal.textContent = totalPrice;

    //Calculate Person
    var totalPerson = totalPrice / this.person;
    let answerPerson = document.querySelector("#person-amount");
    answerPerson.textContent = totalPerson;

    resultsDOM.classList.add("showItem");
  }
}

/*
//Create object
function BillObject(price, tip, person) {
  this.price = price;
  this.tip = tip;
  this.person = person;
}

BillObject.prototype.calculate = function () {
  //Calculate Tip Value
  let tipValue = 0;
  if ((this.tip = "1")) {
    tipValue = 0.2;
  } else if ((this.tip = "2")) {
    tipValue = 0.1;
  } else {
    tipValue = 0;
  }
  var totalTip = this.price * tipValue;
  let answerTip = document.querySelector("#tip-amount");
  answerTip.textContent = totalTip;

  //Calculate Price
  var totalPrice = parseInt(this.price) + parseInt(totalTip);
  let answerTotal = document.querySelector("#total-amount");
  answerTotal.textContent = totalPrice;

  //Calculate Person
  var totalPerson = totalPrice / this.person;
  let answerPerson = document.querySelector("#person-amount");
  answerPerson.textContent = totalPerson;

  resultsDOM.classList.add("showItem");
};
*/
