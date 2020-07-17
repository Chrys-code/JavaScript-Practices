//Variables
const btns = document.querySelectorAll("button");
const counterContainer = document.querySelector("#counter");
let counter = 0;

//EventListeners
btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    if (btn.classList.contains("prevBtn")) {
      counter--;
      counterContainer.innerHTML = counter;
    }
    if (btn.classList.contains("nextBtn")) {
      counter++;
      counterContainer.innerHTML = counter;
    }

    colorChange(counter);
  });
});

//Functions
function colorChange(counter) {
  if (counter > 0) {
    counterContainer.style.color = "green";
  } else if (counter < 0) {
    counterContainer.style.color = "red";
  } else {
    counterContainer.style.color = "#333333";
  }
}
