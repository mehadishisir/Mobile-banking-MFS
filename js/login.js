// step-1 add event listener to login button

document
  .getElementById("button-login")
  .addEventListener("click", function (event) {
    event.preventDefault();

    console.log("Login button clicked");
    // step-2 get the email address inside the email input field
    const phoneNumberField = document.getElementById("phone-number");
    const phoneNumber = phoneNumberField.value;
    // step-3 get the password inside the password input field
    const pin = document.getElementById("pin").value;
    console.log(phoneNumber, pin);
    // step-4 verify email and password
    if (phoneNumber === "01712345678" && pin === "1234") {
      console.log("Valid user");
      window.location.href = "home.html";
    } else {
      console.log("Invalid user");
      alert("Invalid phone number or pin");
    }
  });
