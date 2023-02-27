const boxes = document.querySelector('#boxes');
const input = document.querySelector('input');
const buttonCreate = document.querySelector('button[data-create]');
const buttonDestroy = document.querySelector('button[data-destroy]');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes(amount) {
  for (let i = 1; i <= amount; i += 1) {
    const div = document.createElement('div');
    div.style.height = `${30 + i * 10}px`;
    div.style.width = `${30 + i * 10}px`;
    div.style.backgroundColor = getRandomHexColor();
    boxes.appendChild(div);
  }
}

function destroyBoxes() {
  boxes.innerHTML = '';
}

buttonCreate.addEventListener('click', () => {
  createBoxes(input.value);
});

buttonDestroy.addEventListener('click', () => {
  destroyBoxes();
});
