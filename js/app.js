import * as lib from './functions.js';

// const inputField = document.getElementById('inputField');
const inputField = document.getElementById('inputField');
const toDoContainer =document.getElementById('to-do-items-container');
const addBtn = document.getElementById('add-to-do');
const parallax = document.getElementsByClassName('img-div');
const spread = [...parallax];
const prioritiesContainer = document.getElementById('priorities-box');
const prioritiesList = document.getElementById('priorities-list');

// Add to-do
addBtn.addEventListener('click', function() {
  new lib.Item(inputField.value, toDoContainer, prioritiesList, inputField);
});


//  Config enter key's event listener
inputField.addEventListener('keyup', function(e) {
  if (e.keyCode === 13) {
    e.preventDefault();
    addBtn.click();
  }
});


//  Parallax effect
window.addEventListener('scroll', function() {
  lib.parallaxEffect(spread);
});
