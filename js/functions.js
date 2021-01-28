// Add to-do functionality
export class Item {
  constructor(itemName, boxContainer, prioritiesList, inputField) {
    this.createDiv(itemName, boxContainer,
        prioritiesList, inputField);
  }


  createDiv(itemName, boxContainer, prioritiesList, inputField) {
    const itemBox =document.createElement('div');
    itemBox.classList.add('item-box');


    const input = document.createElement('input');
    input.value = itemName;
    // console.log(prioritiesContainer);
    input.classList.add('item-input');
    input.disabled = true;
    input.type = 'text';


    const editBtn = document.createElement('button');
    editBtn.classList.add('editBtn');
    editBtn.textContent = '+';
    editBtn.addEventListener('click', ()=> this.edit(input, editBtn));


    const removeBtn = document.createElement('button');
    removeBtn.classList.add('removeBtn');
    removeBtn.textContent = '-';
    removeBtn.addEventListener('click',
        ()=>this.remove(boxContainer, itemBox));


    const priorityBtn = document.createElement('button');
    const orderedList = document.createElement('ol');
    priorityBtn.classList.add('priorityBtn');
    priorityBtn.textContent = 'P';
    priorityBtn.addEventListener('click', ()=>{
      this.addPriority(itemName, prioritiesList);
    });


    boxContainer.appendChild(itemBox);

    itemBox.appendChild(input);
    itemBox.appendChild(editBtn);
    itemBox.appendChild(removeBtn);
    itemBox.appendChild(priorityBtn);
    inputField.value = '';
  }


  //  Edit method
  edit(input, btn) {
    input.disabled = !input.disabled;
    if (input.disabled != true) {
      btn.style.backgroundColor = 'lime';
    } else {
      btn.style.backgroundColor = '#B1DBEC';
    }
  }


  // Remove method
  remove(container, itemBox) {
    container.removeChild(itemBox);
  }


  // Priority method

  addPriority(value, list) {
    const listItem = document.createElement('li');
    listItem.appendChild(document.createTextNode(value));
    list.appendChild(listItem);
    listItem.classList.add('priorities-list-item');
    listItem.addEventListener('click', ()=>{
      listItem.classList.add('done');
    });
    listItem.addEventListener('dblclick', ()=>{
      list.removeChild(listItem);
    });

    const removeBtn = document.createElement('button');
    removeBtn.textContent = '-';
    removeBtn.classList.add('removeBtn');
  }
}


// Parallax effect fucntion
export const parallaxEffect = (arr) =>{
  const offset = window.pageYOffset;
  arr.map((x) => x.style.backgroundPositionY = offset * 0.7 + 'px');
};
