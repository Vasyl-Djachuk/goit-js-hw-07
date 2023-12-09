'use strict';
const nameOutput = document.getElementById(`name-output`);
document.getElementById(`name-input`).addEventListener(`input`, event => {
  let name = event.currentTarget.value.trim();

  if (name == ``) {
    nameOutput.textContent = `Anonymous`;
  } else {
    nameOutput.textContent = name.slice(0, 1).toUpperCase() + name.slice(1, 25);
  }
});
