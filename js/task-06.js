'use strict';
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
let boxQuantity;
const inputNamber = document.querySelector(`input[type="number"]`);
inputNamber.addEventListener(`input`, event => {
  boxQuantity = Number(event.currentTarget.value);
});

document.querySelector(`button[data-create]`).addEventListener(`click`, () => {
  inputNamber.value = ``;
  if (boxQuantity <= 100 && boxQuantity > 0) {
    createBoxes(boxQuantity);
  }
});

document
  .querySelector(`button[data-destroy]`)
  .addEventListener(`click`, destroyButton);

const divBoxes = document.querySelector(`#boxes`);

function createBoxes(amount) {
  destroyButton();
  let string = ``;
  let boxSize = 30;
  for (let index = 0; index < amount; index++) {
    string += `<div style="width:${boxSize}px ;height:${boxSize}px ;background-color:${getRandomHexColor()} ;" ></div>`;
    boxSize += 10;
  }
  divBoxes.insertAdjacentHTML('beforeend', string);
  boxQuantity = 0;
}

function destroyButton() {
  inputNamber.value = ``;
  divBoxes.innerHTML = ``;
  boxQuantity = 0;
}
