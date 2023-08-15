// step 1 : adding submit button with event handler

document.getElementById("submit").addEventListener("click", function () {
  // step 2 : adding input field get value
  // always use .value to get value

  const email = document.getElementById("email");

  //step 3 : get password
  const password = document.getElementById("password");

  if (email.value === "admin" && password.value === "admin") {
    location.assign("bank.html");
  } else {
    alert("WRONG INFO 😡");
  }
});
