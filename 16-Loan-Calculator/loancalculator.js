function computeLoan() {
  const loan = document.querySelector("#amount").value;
  const interestValue = document.querySelector("#interest_rate").value;
  const months = document.querySelector("#months").value;

  const interest = (loan * (interestValue / 100)) / months;
  let totalToPay = ((parseInt(loan) + parseInt(interest)) / months).toFixed(2);
  console.log(totalToPay);

  document.querySelector(
    "#payment"
  ).innerText = `Monthly charged: $${totalToPay}`;
}
