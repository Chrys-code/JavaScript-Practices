//Variables
const form = document.querySelector("form");
const message = document.querySelector(".message-content");
const alert = document.querySelector(".alert");
const input = document.querySelectorAll("input")[0];
const feedback = document.querySelector(".feedback");
//Eventlisteners

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (input.value == "") {
    feedback.classList.add("show");
    setInterval(function () {
      feedback.classList.remove("show");
    }, 3000);
  } else {
    message.textContent = input.value;
  }
});
