//Global Variables
const buttons = document.querySelectorAll(".btn");
const storeItems = document.querySelectorAll(".store-item");
const input = document.querySelector("input");

//EventListeners

//Search By Onclick
buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    e.preventDefault();
    const filter = e.target.dataset.filter;

    storeItems.forEach((item) => {
      if (filter === "all") {
        item.style.display = "block";
      } else {
        if (item.classList.contains(filter)) {
          item.style.display = "block";
        } else {
          item.style.display = "none";
        }
      }
    });
  });
});

//Search By Input
input.addEventListener("keyup", (e) => {
  const searchFilter = e.target.value.toLowerCase().trim();
  console.log(searchFilter);
  storeItems.forEach((item) => {
    if (item.textContent.includes(searchFilter)) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
});
