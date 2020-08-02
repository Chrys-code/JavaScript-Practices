const buttons = document.querySelectorAll(".button");
const body = document.querySelector("body");

buttons.forEach((button) =>
  button.addEventListener("click", (e) => {
    const target = e.target;
    if (target.id === "grey") {
      body.style.background = "grey";
    } else if (target.id === "white") {
      body.style.background = "white";
    } else if (target.id === "blue") {
      body.style.background = "blue";
    } else {
      body.style.background = "yellow";
    }
  })
);
