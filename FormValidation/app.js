//add blur event listeners
document.querySelector("#name").addEventListener('blur', validateName);
document.querySelector("#zip").addEventListener('blur', validateZip);
document.querySelector("#email").addEventListener('blur', validateEmail);
document.querySelector("#phone").addEventListener('blur', validatePhone);

function validateName() {
  const name = document.querySelector("#name");
  const re = /^[a-zA-Z]{2,10}$/;

  if (!re.test(name.value)) {
    name.classList.add("is-invalid");
    name.classList.remove("is-valid");
  } else {
    name.classList.add("is-valid");
    name.classList.remove("is-invalid");
  }
}

function validateZip() {
  const zip = document.querySelector("#zip");
  const re = /^[0-9]{5}(-[0-9]{4})?$/;

  if (!re.test(zip.value)) {
    zip.classList.add("is-invalid");
    zip.classList.remove("is-valid");
  } else {
    zip.classList.add("is-valid");
    zip.classList.remove("is-invalid");
  }
}

function validateEmail() {
  const email = document.querySelector("#email");

  const re = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;

  if (!re.test(email.value)) {
    email.classList.add("is-invalid");
    email.classList.remove("is-valid");
  } else {
    email.classList.add("is-valid");
    email.classList.remove("is-invalid");
  }
}

function validatePhone() {
  const phone = document.querySelector("#phone");

  const re = /^\(?\d{3}\)?[-. ]?\d{3}[-. ]?\d{4}$/;

  if (!re.test(phone.value)) {
    phone.classList.add("is-invalid");
    phone.classList.remove("is-valid");
  } else {
    phone.classList.add("is-valid");
    phone.classList.remove("is-invalid");
  }
}