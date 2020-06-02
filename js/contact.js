const form = document.querySelector("#contactForm");
const heading = document.querySelector("h1");
const succsesMsg = document.querySelector(".okMsg");

form.addEventListener("submit", validateForm);

function validateForm(event) {
  const errorMsg = document.querySelectorAll(".form-error");
  const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  const firstName = document.querySelector("#firstName");
  const lastName = document.querySelector("#lastName");
  const email = document.querySelector("#email");
  const message = document.querySelector("#message");

  event.preventDefault();

  const firstNameLength = firstName.value.trim().length;
  firstNameLength === 0
    ? (errorMsg[0].style.display = "block")
    : (errorMsg[0].style.display = "none");

  const lastNameLength = lastName.value.trim().length;
  lastNameLength === 0
    ? (errorMsg[1].style.display = "block")
    : (errorMsg[1].style.display = "none");

  const emailLength = email.value.trim().length;
  emailLength === 0
    ? (errorMsg[2].style.display = "block")
    : (errorMsg[2].style.display = "none");

  email.value.match(mailformat)
    ? (errorMsg[3].style.display = "none")
    : (errorMsg[3].style.display = "block");

  const messageLength = message.value.trim().length;
  messageLength >= 10
    ? (errorMsg[4].style.display = "none")
    : (errorMsg[4].style.display = "block");

  if (
    firstNameLength > 0 &&
    lastNameLength > 0 &&
    emailLength > 0 &&
    email.value.match(mailformat) &&
    messageLength >= 10
  ) {
    succsesMsg.style.display = "block";
  }
  for (let i = 0; i < errorMsg.length; i++) {
    errorMsg[i].removeAttribute("id");
  }
}
