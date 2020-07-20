export const inputs = document.querySelectorAll("input"); // customerName, Course, Author
const error = document.querySelectorAll(".input-group-text");

//Validator (feedback)
export function validator() {
  inputs.forEach((input) => {
    input.addEventListener("keyup", () => {
      //Name
      if (input.classList.contains("name")) {
        if (inputs[0].value === null || inputs[0].value === "") {
          error[0].innerHTML = "Please enter Customer Name";
        } else {
          error[0].innerHTML = "<i class='fas fa-user'></i>";
        }
      }
      //Course
      if (input.classList.contains("course"))
        if (inputs[1].value === null || inputs[1].value === "") {
          error[1].innerHTML = "Please enter Course Name";
        } else {
          error[1].innerHTML = "<i class='fas fa-book'></i>";
        }
      //Author
      if (input.classList.contains("author"))
        if (inputs[2].value === null || inputs[2].value === "") {
          error[2].innerHTML = "Please enter Author Name";
        } else {
          error[2].innerHTML = "<i class='fas fa-user-circle'></i>";
        }
    });
  });
}
