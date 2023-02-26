const form = document.querySelector('.login-form');

const email = document.getElementsByName('email');
const password = document.getElementsByName('password');

form.addEventListener('submit', event => {
  event.preventDefault();
  if (email[0].value === '' || password[0].value === '') {
    alert('All fields must be filled with data');
  } else {
    const data = {
      email: email[0].value,
      password: password[0].value,
    };
    console.log(data);
    event.currentTarget.reset();
  }
});
