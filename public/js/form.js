const email = document.getElementById("mail");

email.addEventListener("input", function (event) {
  if (email.validity.typeMismatch) {
    email.setCustomValidity("Please Enter a Valid Email Address");
  } else {
    email.setCustomValidity("");
  }
});

document.getElementsByName('email')[0].setAttribute("placeholder", "example@example.com");
document.getElementsByName('password')[0].setAttribute("placeholder", "8 Character Min");
document.getElementsByName('confirmPassword')[0].setAttribute("placeholder", "8 Character Min");
document.getElementsByName('fullName')[0].setAttribute("placeholder", "First Last");