const loginForm = document.querySelector(`.login-form`);
loginForm.addEventListener(`submit`, submitForm);

function submitForm(event) {
  event.preventDefault();
  const form = event.target;
  let userEmail = form.elements.email.value.trim();
  let userPassword = form.elements.password.value.trim();
  if (userEmail == '' || userPassword == '') {
    alert(`All form fields must be filled in`);
  } else {
    console.log({
      Email: userEmail,
      Password: userPassword,
    });
    form.reset();
  }
}
