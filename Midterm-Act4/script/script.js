window.onload = function () {
  var form = document.getElementById("contactForm");
  var heading = document.getElementById("pageHeading");
  var confirmationBox = document.getElementById("confirmation");

  var nameInput = document.getElementById("name");
  var emailInput = document.getElementById("email");
  var messageInput = document.getElementById("message");

  var nameErrorText = document.getElementById("nameError");
  var emailErrorText = document.getElementById("emailError");
  var messageErrorText = document.getElementById("messageError");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    var nameValue = nameInput.value.trim();
    var emailValue = emailInput.value.trim();
    var messageValue = messageInput.value.trim();

    var formIsValid = true;

    if (nameValue === "") {
      nameErrorText.textContent = "Please enter your name.";
      formIsValid = false;
    } else {
      nameErrorText.textContent = "";
    }

    if (emailValue === "") {
      emailErrorText.textContent = "Please enter your email.";
      formIsValid = false;
    } else if (
      emailValue.indexOf("@") === -1 ||
      emailValue.indexOf(".") === -1
    ) {
      emailErrorText.textContent = "Please enter a valid email address.";
      formIsValid = false;
    } else {
      emailErrorText.textContent = "";
    }

    if (messageValue === "") {
      messageErrorText.textContent = "Please enter a message.";
      formIsValid = false;
    } else {
      messageErrorText.textContent = "";
    }

    if (formIsValid === false) {
      confirmationBox.hidden = true;
      return;
    }

    confirmationBox.hidden = false;

    heading.textContent = "Message Sent!";
    heading.style.color = "green";

    form.reset();
  });
};