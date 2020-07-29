//Variables
//Person data
const firstName = document.getElementById("first");
const lastName = document.getElementById("last");
const streetName = document.getElementById("street");
const phoneCont = document.getElementById("phone");
const emailCont = document.getElementById("email");
const image = document.getElementById("photo");
//Request Button
const btn = document.querySelector(".btn");

//EventListener
btn.addEventListener("click", () => {
  requestNewPerson(personData);
});

//Functions
function requestNewPerson(person) {
  const url = `https://randomuser.me/api/`;
  const ajax = new XMLHttpRequest();
  ajax.open("GET", url, true);

  ajax.onload = function () {
    if (this.status === 200) {
      console.log("200");
      person(this.responseText, showPerson);
    } else {
      console.log(this.statusText);
    }
  };
  ajax.onerror = function () {
    console.log("There was an error!");
  };
  ajax.send();
}

function personData(response, person) {
  const data = JSON.parse(response);

  const {
    name: { first },
    name: { last },
    location: {
      street: { name },
    },
    picture: { large },
    phone,
    email,
  } = data.results[0];

  person(first, last, large, name, phone, email);
}

// Kept this piece of code from the original project
function showPerson(first, last, large, name, phone, email) {
  firstName.textContent = first;
  lastName.textContent = last;
  streetName.textContent = name;
  phoneCont.textContent = phone;
  emailCont.textContent = email;
  image.src = large;
}
