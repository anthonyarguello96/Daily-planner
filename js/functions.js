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
    input.classList.add('item-input');
    input.disabled = true;
    input.type = 'text';
    input.addEventListener('keyup', function(e) {
      if (e.keyCode === 13) {
        e.preventDefault();
        editBtn.click();
      }
    });


    const editBtn = document.createElement('button');
    editBtn.classList.add('editBtn');
    editBtn.innerHTML = '<i class="fas fa-edit"></i>';
    editBtn.addEventListener('click', ()=> this.edit(input, editBtn));


    const removeBtn = document.createElement('button');
    removeBtn.classList.add('removeBtn');
    removeBtn.innerHTML = '<i class="fas fa-trash-alt"></i>';
    removeBtn.addEventListener('click',
        ()=>this.remove(boxContainer, itemBox));


    const priorityBtn = document.createElement('button');
    const orderedList = document.createElement('ol');
    priorityBtn.classList.add('priorityBtn');
    priorityBtn.innerHTML = '<i class="fas fa-exclamation"></i>';
    priorityBtn.addEventListener('click', ()=>{
      this.addPriority(itemName, prioritiesList);
    });


    boxContainer.appendChild(itemBox);

    itemBox.appendChild(input);
    itemBox.appendChild(priorityBtn);
    itemBox.appendChild(editBtn);
    itemBox.appendChild(removeBtn);
    inputField.value = '';
  }


  //  Edit method
  edit(input, btn) {
    input.disabled = !input.disabled;
    if (input.disabled != true) {
      btn.style.backgroundColor = 'lime';
    } else {
      btn.style.backgroundColor = 'rgba(255,223,152,0.8)';
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
      if (listItem.classList.contains('done') ) {
        listItem.classList.remove('done');
      } else {
        listItem.classList.add('done');
      }
    });

    listItem.addEventListener('dblclick', ()=>{
      list.removeChild(listItem);
    });
  }
}


// Parallax effect fucntion
export const parallaxEffect = (arr) =>{
  const offset = window.pageYOffset;
  arr.map((x) => x.style.backgroundPositionY = offset * 0.7 + 'px');
};
