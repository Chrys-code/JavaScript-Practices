// Variables
const btn = document.querySelector(".btn");
const body = document.querySelector("body");
const colors = [ "blue", "violet", "red", "green", "yellow"];

//Eventlisteners
btn.addEventListener('click', () => {
   const colorIndex = parseInt(Math.random()*colors.length);
   body.style.backgroundColor = colors[colorIndex];
});