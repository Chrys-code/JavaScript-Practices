//Variables
const openBtn = document.querySelector("#show-btn");
const form = document.querySelector("form");
const formCard = document.querySelector(".question-card");
const closeBtn = document.querySelector(".close-btn");
const inputs = document.querySelectorAll("textarea");
const feedback = document.querySelector(".feedback");
const questionList = document.querySelector("#questions-list");

let counter = 0;

//Create
const ui = new UI();

//Get data from storage
let data = ui.getDataFromLocalStorage();
if (data.length > 0) {
  counter = data[data.length - 1].id + 1;
} else {
  counter = 1;
}

//Write out data
data.forEach((question) => {
  ui.addQuestion(questionList, question);
});

//toggle question form
openBtn.addEventListener("click", function () {
  ui.showQuestion(formCard);
});

//hide question form
closeBtn.addEventListener("click", function () {
  ui.hideQuestion(formCard);
});

//Form submit
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const question = inputs[0].value;
  const answer = inputs[1].value;
  const id = counter;
  if (
    inputs[0].value === null ||
    inputs[0].value == "" ||
    inputs[1].value === null ||
    inputs[1].value == ""
  ) {
    feedback.innerText =
      "Plase provide information for both question and answer";
    feedback.classList.add("showItem");
    setInterval(() => {
      feedback.classList.remove("showItem");
    }, 5000);
  } else {
    const customerQuestion = new Question(id, question, answer);
    data.push(customerQuestion);
    ui.saveToLocalStorage(data);
    counter++;
    ui.addQuestion(questionList, customerQuestion);
  }

  for (var i = 0; i < inputs.length; i++) {
    inputs[i].value = "";
  }
});

//Question/Answer
questionList.addEventListener("click", (e) => {
  e.preventDefault();
  const target = e.target;
  if (target.classList.contains("show-answer")) {
    target.nextElementSibling.classList.toggle("showItem");
  } else if (target.classList.contains("edit-flashcard")) {
    questionList.removeChild(target.parentElement.parentElement.parentElement);
    inputs[0].value = target.parentElement.parentElement.children[0].innerText;
    inputs[1].value = target.parentElement.previousElementSibling.innerText;

    let id = target.dataset.id;
    let tempData = data.filter((item) => {
      return item.id !== parseInt(id);
    });
    data = tempData;
    ui.saveToLocalStorage(data);
  } else if (target.classList.contains("delete-flashcard")) {
    let id = target.dataset.id;
    questionList.removeChild(target.parentElement.parentElement.parentElement);
    let tempData = data.filter((item) => {
      return item.id !== parseInt(id);
    });
    data = tempData;
    ui.saveToLocalStorage(data);
  }
});

// UI
function UI() {
  //Add
  UI.prototype.addQuestion = function (element, customerQuestion) {
    const div = document.createElement("div");
    div.classList.add("col-md-4");
    div.innerHTML = `<div class="card card-body flashcard my-3">
    <h4 class="text-capitalize">${customerQuestion.question}</h4>
    <a href="#" class="text-capitalize my-3 show-answer">Show/Hide Answer</a>
    <h5 class="answer mb-3">${customerQuestion.answer}</h5>
    <div class="flashcard-btn d-flex justify-content-between">

     <a href="#" id="edit-flashcard" class=" btn my-1 edit-flashcard text-uppercase" data-id="${customerQuestion.id}">edit</a>
     <a href="#" id="delete-flashcard" class=" btn my-1 delete-flashcard text-uppercase" data-id="${customerQuestion.id}">delete</a>
    </div>
   </div>`;
    element.appendChild(div);
  };

  //Show
  UI.prototype.showQuestion = function (element) {
    element.classList.toggle("showItem");
  };

  //Hide
  UI.prototype.hideQuestion = function (element) {
    element.classList.remove("showItem");
  };

  UI.prototype.saveToLocalStorage = function (data) {
    localStorage.clear(data);
    const dataJSON = JSON.stringify(data);
    console.log(dataJSON);
    localStorage.setItem("flash-questions", dataJSON);
  };

  UI.prototype.getDataFromLocalStorage = function () {
    let storageQuestions = localStorage.getItem("flash-questions");
    if (storageQuestions) {
      const storageQuestionsParsed = JSON.parse(storageQuestions);
      return storageQuestionsParsed;
    } else {
      return (storageQuestions = []);
    }
  };
}

//card details
function Question(id, question, answer) {
  this.id = id;
  this.question = question;
  this.answer = answer;
}
