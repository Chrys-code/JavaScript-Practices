const image = document.querySelector("img");
const displayJoke = document.querySelector("#display-joke");
const btn = document.querySelector("#get-joke");
const url = "https://api.chucknorris.io/jokes/random";

btn.addEventListener("click", requestJoke);

function requestJoke() {
  //represents XML request
  const request = new XMLHttpRequest();
  //Query
  request.open("GET", url, true);

  request.onreadystatechange = function (response) {
    if (this.status === 200 && this.readyState === 4) {
      console.log(this.responseText);
      response = JSON.parse(this.responseText);
      displayJoke.innerHTML = `${response.value}`;
    } else {
      this.onerror = onerror();
    }
  };
  request.send();
}

function onerror() {
  displayJoke.innerHTML = "There was an error!";
}
