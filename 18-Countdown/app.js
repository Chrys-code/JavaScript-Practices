//variables
const expiryDateDisplay = document.getElementById("countdown-from");
const timeLeftDisplay = document.getElementById("root");
// set alarm to date
let countDownFromDate = new Date("Aug 8, 2020 12:00:00").toDateString();
let expiryDate = new Date("Aug 8, 2020 12:00:00").getTime();

// counter loop 1s interval
let x = setInterval(function () {
  // date
  let now = new Date().getTime();
  //get time between current date to countdown date
  const timeBetween = expiryDate - now;
  //get days, hours, minutes, and seconds
  let days = Math.floor(timeBetween / (1000 * 60 * 60 * 24));
  let hours = Math.floor(
    timeBetween % ((1000 * 60 * 60 * 24) / (1000 * 60 * 60))
  );
  let minutes = Math.floor(timeBetween % ((1000 * 60 * 60) / (1000 * 60)));
  let seconds = Math.floor((timeBetween % (1000 * 60)) / 1000);

  //output countdown from date
  expiryDateDisplay.innerHTML = `${countDownFromDate}`;
  //output timer to HTML
  timeLeftDisplay.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

  //stop countdown timer when date is reached
  if (timeBetween < 0) {
    clearInterval(x);
    timeLeftDisplay.innerHTML = "Timer Expired";
  }
}, 1000);
