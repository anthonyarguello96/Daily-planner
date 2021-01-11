import * as lib from './functions.js'

const inputField = document.getElementById('inputField');
const toDoContainer =document.getElementById('to-do-items-container');
const addBtn = document.getElementById('add-to-do');

addBtn.addEventListener('click',function(){lib.addToDo(inputField, toDoContainer)} );
