import * as lib from './functions.js';

// const inputField = document.getElementById('inputField');
const inputField = document.getElementById('inputField');
const toDoContainer =document.getElementById('to-do-items-container');
const addBtn = document.getElementById('add-to-do');
const parallax = document.getElementsByClassName('img-div');
const spread = [...parallax];

// Add to-do
addBtn.addEventListener('click', function() {
  lib.addToDo(inputField, toDoContainer);
});

//  Parallax effect
window.addEventListener('scroll', function() {
  lib.parallaxEffect(spread);
});
