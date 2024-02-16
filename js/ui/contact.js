const form = document.querySelector("#contactForm");
const firstName = document.querySelector("#firstName");
const firstNameError = document.querySelector("#firstNameError");
const LastName = document.querySelector("#LastName");
const LastNameError = document.querySelector("#LastNameError");
const email = document.querySelector("#email");
const emailError = document.querySelector("#emailError");
const textera = document.querySelector("#textera");
const textError = document.querySelector("#texteraError");
const subject = document.querySelector("#subject");
const subjectError = document.querySelector("#subjectError");

function validateForm() {
  event.preventDefault();

  if (checkLength(firstName.value, 6) === true) {
    firstNameError.style.display = "none";
  } else {
    firstNameError.style.display = "block";
  }

  if (checkLength(LastName.value, 6) === true) {
    LastNameError.style.display = "none";
  } else {
    LastNameError.style.display = "block";
  }

  if (validateEmail(email.value) === true) {
    emailError.style.display = "none";
  } else {
    emailError.style.display = "block";
  }

  if (checkLength(textera.value, 25) === true) {
    textError.style.display = "none";
  } else {
    textError.style.display = "block";
  }
  if (checkLength(subject.value, 15) === true) {
    subjectError.style.display = "none";
  } else {
    subjectError.style.display = "block";
  }
}

form.addEventListener("submit", validateForm);

function checkLength(value, len) {
  if (value.trim().length >= len) {
    return true;
  } else {
    return false;
  }
}

function validateEmail(email) {
  const regEx = /\S+@\S+\.\S+/;
  const patternMatches = regEx.test(email);
  return patternMatches;
}

//if (firstNameError.value.trim().length > ){
//firstName.style.display = "none";
//}else{
//firstName.style.style.display = "block";
//}
//if (LastName.value.trim().length > 3){
//LastNameError.style.display = "none";
//}else{
//LastNameError.style.display = "block";
//}
