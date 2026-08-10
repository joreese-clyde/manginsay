// ==========================================================================
// script.js
// A simple contact form: checks that all fields are filled in,
// shows a confirmation message, and changes the heading color.
// ==========================================================================

// Wait until the whole page has loaded before running any code.
// This makes sure all the HTML elements exist before we try to grab them.
window.onload = function () {

  // ------------------------------------------------------------------
  // STEP 1: Get references to the HTML elements we need to work with.
  // getElementById gives us back the actual element from the page.
  // ------------------------------------------------------------------
  var form = document.getElementById("contactForm");
  var heading = document.getElementById("pageHeading");
  var confirmationBox = document.getElementById("confirmation");

  var nameInput = document.getElementById("name");
  var emailInput = document.getElementById("email");
  var messageInput = document.getElementById("message");

  var nameErrorText = document.getElementById("nameError");
  var emailErrorText = document.getElementById("emailError");
  var messageErrorText = document.getElementById("messageError");

  // ------------------------------------------------------------------
  // STEP 2: Listen for the form's "submit" event.
  // This runs every time the user clicks the "Send Message" button.
  // ------------------------------------------------------------------
  form.addEventListener("submit", function (event) {

    // Stop the browser from reloading the page (the default form behavior).
    event.preventDefault();

    // Read the current text typed into each field.
    // .trim() removes extra spaces from the start and end.
    var nameValue = nameInput.value.trim();
    var emailValue = emailInput.value.trim();
    var messageValue = messageInput.value.trim();

    // We will track whether the form is valid using a boolean flag.
    var formIsValid = true;

    // ----------------------------------------------------------------
    // STEP 3: Validate the Name field.
    // ----------------------------------------------------------------
    if (nameValue === "") {
      nameErrorText.textContent = "Please enter your name.";
      formIsValid = false;
    } else {
      nameErrorText.textContent = "";
    }

    // ----------------------------------------------------------------
    // STEP 4: Validate the Email field.
    // First check it isn't empty, then check it looks like an email
    // (contains an "@" symbol and a "." after it).
    // ----------------------------------------------------------------
    if (emailValue === "") {
      emailErrorText.textContent = "Please enter your email.";
      formIsValid = false;
    } else if (emailValue.indexOf("@") === -1 || emailValue.indexOf(".") === -1) {
      emailErrorText.textContent = "Please enter a valid email address.";
      formIsValid = false;
    } else {
      emailErrorText.textContent = "";
    }

    // ----------------------------------------------------------------
    // STEP 5: Validate the Message field.
    // ----------------------------------------------------------------
    if (messageValue === "") {
      messageErrorText.textContent = "Please enter a message.";
      formIsValid = false;
    } else {
      messageErrorText.textContent = "";
    }

    // ----------------------------------------------------------------
    // STEP 6: If any field was invalid, stop here and do not submit.
    // ----------------------------------------------------------------
    if (formIsValid === false) {
      confirmationBox.hidden = true; // make sure old confirmation is hidden
      return; // exit the function early
    }

    // ----------------------------------------------------------------
    // STEP 7: Everything is valid! Show the confirmation message.
    // ----------------------------------------------------------------
    confirmationBox.hidden = false;

    // ----------------------------------------------------------------
    // STEP 8: DOM manipulation - change the heading text and color
    // after a successful submission.
    // ----------------------------------------------------------------
    heading.textContent = "Message Sent!";
    heading.style.color = "green";

    // ----------------------------------------------------------------
    // STEP 9: Clear the form so it's empty for next time.
    // ----------------------------------------------------------------
    form.reset();
  });
};