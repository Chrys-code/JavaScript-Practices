//Variables
const storeItems = document.querySelectorAll(".store-item");
const lightBox = document.querySelector(".lightbox-container");
const lightBoxItem = document.querySelector(".lightbox-item");
const images = document.querySelectorAll(".store-img");
const lightBoxClose = document.querySelector(".lightbox-close");
const lightBoxArrows = document.querySelectorAll(".lightbox-control");

const imageList = [];
let imageCounter = 0;

//EventListeners
document.addEventListener("DOMContentLoaded", createImageArray);
document.addEventListener("DOMContentLoaded", showModal);
document.addEventListener("DOMContentLoaded", hideModal);

//Functions
function createImageArray() {
  images.forEach((image) => {
    imageList.push(image.src);
  });
}

function showModal() {
  storeItems.forEach(function (item) {
    item.addEventListener("click", function (e) {
      let image = e.target.src;
      lightBoxItem.style.backgroundImage = `url(${image})`;
      lightBox.classList.add("show");
      imageCounter = imageList.indexOf(image);
    });
  });
}

function hideModal() {
  lightBoxClose.addEventListener("click", () => {
    lightBox.classList.remove("show");
  });
}

lightBoxArrows.forEach((arrow) => {
  arrow.addEventListener("click", (e) => {
    if (arrow.classList.contains("btnRight")) {
      imageCounter++;
      if (imageCounter > imageList.length - 1) {
        imageCounter = 0;
      }
      lightBoxItem.style.backgroundImage = `url(${imageList[imageCounter]})`;
    }

    if (arrow.classList.contains("btnLeft")) {
      imageCounter--;
      if (imageCounter < 0) {
        imageCounter = imageList.length - 1;
      }
      lightBoxItem.style.backgroundImage = `url(${imageList[imageCounter]})`;
    }

    console.log(imageCounter);
  });
});
