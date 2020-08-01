const button = document.getElementById("btn");
const input = document.querySelector("input");
const display = document.querySelector("#output");

let w = [];
let i = 0;

button.addEventListener("click", () => {
  w.push(input.value);
  let l = w[i].length;
  display.innerText = l;
  i++;
  input.value = "";
});
