document.getElementById("cash-out-btn").addEventListener("click", function () {
  const cashOutAmmount = document.getElementById("cashout-ammount").value;
  const cashOutAmmountNumber = parseFloat(cashOutAmmount);
  const pinNumber = document.getElementById("cash-out-pin").value;
  if (pinNumber === "1234") {
    const currentBalance = document.getElementById("current-balance").innerText;
    const currentBalanceNumber = parseFloat(currentBalance);
    const newBlance = currentBalanceNumber - cashOutAmmountNumber;
    document.getElementById("current-balance").innerText = newBlance;
  } else {
    alert("please enter valid pin");
  }
});
