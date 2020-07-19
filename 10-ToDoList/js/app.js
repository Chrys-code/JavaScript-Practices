//Variables
const form = document.querySelector("#itemForm");
const itemInput = document.querySelector("#itemInput");
const itemList = document.querySelector(".item-list");
const feedback = document.querySelector(".feedback");
const clearButton = document.querySelector("#clear-list");

//EventListeners
document.addEventListener("DOMContentLoaded", getLocalStorage);
form.addEventListener("submit", addTodoItem);
clearButton.addEventListener("click", clearItems);

//Functions
//Input
function addTodoItem(e) {
  e.preventDefault();
  const item = itemInput.value;
  if (item.length === 0) {
    feedback.innerHTML = "Please Enter Valid Value";
    feedback.classList.add("showItem", "alert-danger");
    setTimeout(function () {
      feedback.classList.remove("showItem");
    }, 3000);
  } else {
    writeToDoList(item);
    addItemToLocalStorage(item);
    handleItems();
  }
  itemInput.value = "";
}

//Push item to local storage
function addItemToLocalStorage(item) {
  let todoItems;
  if (localStorage.getItem("todoItems") === null) {
    todoItems = [];
  } else {
    todoItems = JSON.parse(localStorage.getItem("todoItems"));
  }
  todoItems.push(item);
  localStorage.setItem("todoItems", JSON.stringify(todoItems));
}

//Get local storage and create list
function getLocalStorage() {
  let todoList;
  if (localStorage.getItem("todoItems") === null) {
    todoList = [];
  } else {
    todoList = JSON.parse(localStorage.getItem("todoItems"));
  }
  todoList.forEach((item) => {
    insertToHTML(item);
  });
  handleItems();
}

//Create list item
function writeToDoList(item) {
  insertToHTML(item);
}

function insertToHTML(item) {
  itemList.insertAdjacentHTML(
    "beforeend",
    `<div class="item my-3"><h5 class="item-name text-capitalize">${item}</h5>
      <div class="item-icons">
          <a href="#" class="complete-item mx-2 item-icon">
              <i class="far fa-check-circle"></i></a><a href="#" class="edit-item mx-2 item-icon">
              <i class="far fa-edit"></i></a><a href="#" class="delete-item item-icon">
              <i class="far fa-times-circle">
              </i>
          </a>
      </div>
    </div>`
  );
}

//Item functions
function handleItems() {
  const items = itemList.querySelectorAll(".item");
  items.forEach((item) => {
    item.addEventListener("click", (e) => {
      const targetEl = e.target;
      if (targetEl.classList.contains("fa-check-circle")) {
        item.classList.toggle("completed");
      } else if (targetEl.classList.contains("fa-edit")) {
        itemInput.value =
          targetEl.parentElement.parentElement.parentElement.children[0].innerText;
        removeItem(e);
        removeToDoFromLocalStorage(e);
      } else if (targetEl.classList.contains("far")) {
        removeItem(e);
        removeToDoFromLocalStorage(e);
      }
    });
  });
}

//Remove all
function clearItems() {
  localStorage.clear();
  getLocalStorage();
  location.reload();
}

//Remove specific
function removeItem(e) {
  const target = e.target.parentElement.parentElement.parentElement;
  target.classList.add("hideItem");
}

function removeToDoFromLocalStorage(e) {
  const target = e.target.parentElement.parentElement.parentElement;
  let todoItems;
  if (localStorage.getItem("todoItems") === null) {
    todoItems = [];
  } else {
    todoItems = JSON.parse(localStorage.getItem("todoItems"));
  }
  const todoIndex = target.children[0].innerText;
  todoItems.splice(todoItems.indexOf(todoIndex), 1);
  localStorage.setItem("todoItems", JSON.stringify(todoItems));
}

// main.css ".hideItem { display: none; } class added
