'use strict';
const categories = document.querySelector(`#categories`);
console.log(`Number of categories: ${categories.children.length}`);

[...categories.children].forEach(element => {
  console.log(`category: ${element.firstElementChild.textContent}`);
  console.log(`elements:${element.lastElementChild.children.length}`);
});
