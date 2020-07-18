//Variables
let screen = document.querySelector(".screen");
let buttons = document.querySelectorAll(".btn");
let clear = document.querySelector(".btn-clear");
let equal = document.querySelector(".btn-equal");

//EventListeners
//Input
buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    const target = e.target.dataset.num;
    screen.value += target;
  });
});

//Calculate
equal.addEventListener("click", (e) => {
  if (screen.value == "") {
    screen.value = "Please provide details";
  } else {
    screen.value = "";
    var answer = eval(screen.value);
    screen.value = answer;
  }
});

//Clear
clear.addEventListener("click", () => {
  screen.value = "";
});
