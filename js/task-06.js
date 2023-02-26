const input = document.querySelector('#validation-input');

const dataLength = input.dataset.length;

input.addEventListener('blur', () => {
  if (input.value.length < dataLength) {
    input.classList.add('invalid');
    input.classList.remove('valid');
  } else if (input.value.length >= dataLength) {
    input.classList.remove('invalid');
    input.classList.add('valid');
  }
});
