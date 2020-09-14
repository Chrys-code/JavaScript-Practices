const root = document.querySelector(".root");

// Proxy
// Allows an object to be used as a placeholder
// Proxy allows access to that object

//Externap API service

function CryptocurrencyAPI() {
  this.getValue = function (coin) {
    console.log("Calling External API...");

    switch (coin) {
      case "Bitcoin":
        return "$500";
      case "Litecoin":
        return "$50";
      case "Ethereum":
        return "$175";
    }
  };
}
////////////////

const api = new CryptocurrencyAPI();
// too many requests slowing down network and retrieving data slowly
// Proxy talks to the server instead of us and stores in cache

function CryptocurrencyProxy() {
  this.api = new CryptocurrencyAPI();
  this.cache = {};

  this.getValue = function (coin) {
    if (this.cache[coin] == null) {
      this.cache[coin] = this.api.getValue(coin);
    }

    return this.cache[coin];
  };
}
const proxy = new CryptocurrencyProxy();

//Expected from API
console.log(proxy.getValue("Bitcoin"));
console.log(proxy.getValue("Litecoin"));
console.log(proxy.getValue("Ethereum"));

//Expected from cache:
console.log(proxy.getValue("Bitcoin"));
console.log(proxy.getValue("Litecoin"));
console.log(proxy.getValue("Ethereum"));
console.log(proxy.getValue("Bitcoin"));
console.log(proxy.getValue("Litecoin"));
console.log(proxy.getValue("Ethereum"));
console.log(proxy.getValue("Bitcoin"));
console.log(proxy.getValue("Litecoin"));
console.log(proxy.getValue("Ethereum"));
console.log(proxy.getValue("Bitcoin"));
console.log(proxy.getValue("Litecoin"));
console.log(proxy.getValue("Ethereum"));
console.log(proxy.getValue("Bitcoin"));
console.log(proxy.getValue("Litecoin"));
console.log(proxy.getValue("Ethereum"));
console.log(proxy.getValue("Bitcoin"));
console.log(proxy.getValue("Litecoin"));
console.log(proxy.getValue("Ethereum"));
