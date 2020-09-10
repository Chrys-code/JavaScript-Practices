// Variables
const number1Display = document.querySelector("#number1");
const number2Display = document.querySelector("#number2");
const input = document.querySelector("input");
const btn = document.querySelector("button");

//Values
const number1 = parseInt(Math.random() * 10);
const number2 = parseInt(Math.random() * 10);

// Assign values to HTML
number1Display.innerHTML = `<p>${number1}</p>`;
number2Display.innerHTML = `<p>${number2}</p>`;

//EventListeners
btn.addEventListener("click", check);

// comparison
function check() {
  const guess = input.value;
  let pass = { message: "pass" };
  let failed = { message: "wrong answer" };
  if (number1 + number2 == guess) {
    return alert(pass.message), window.location.reload();
  } else {
    return alert(failed.message), window.location.reload();
  }
}
