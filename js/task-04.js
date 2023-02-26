const decrementButton = document.querySelector(
  'button[data-action="decrement"]'
);

const incrementButton = document.querySelector(
  'button[data-action="increment"]'
);

const counterShow = document.querySelector('#value');

let counterValue = 0;

decrementButton.addEventListener('click', () => {
  counterValue -= 1;
  counterShow.textContent = counterValue;
});

incrementButton.addEventListener('click', () => {
  counterValue += 1;
  counterShow.textContent = counterValue;
});
