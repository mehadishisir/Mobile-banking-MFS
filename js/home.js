// step-1 add event listener to login button
document.getElementById("add-money-btn").addEventListener("click", function () {
  //   step-2 add ammount
  const addAmmount = document.getElementById("ammount").value;

  // step-3 add pin
  const pinNumber = document.getElementById("pin").value;

  //   step-4 verify pin
  if (pinNumber === "1234") {
    // step-5 update balance
    const currentBalance = document.getElementById("current-balance").innerText;
    const currentBalanceNumber = parseFloat(currentBalance);
    const addAmmountNumber = parseFloat(addAmmount);
    const totalBalance = currentBalanceNumber + addAmmountNumber;
    // step-6 set the balance
    document.getElementById("current-balance").innerText = totalBalance;
    // currentBalance.innerText = totalBalance;
    console.log(totalBalance);
  } else {
    alert("please enter valid pin");
  }
});
