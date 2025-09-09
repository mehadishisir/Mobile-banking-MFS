// add money form show
document
  .getElementById("add-money-form")
  .addEventListener("click", function () {
    document.getElementById("add-money").classList.remove("hidden");
    document.getElementById("withdraw").classList.add("hidden");
  });
// cashout form show
document.getElementById("withdraw-form").addEventListener("click", function () {
  document.getElementById("withdraw").classList.remove("hidden");
  document.getElementById("add-money").classList.add("hidden");
});
