// Add to-do functionality
export class Item {
  constructor(itemName, boxConatainer) {
    this.createDiv(itemName, boxConatainer);
  }


  createDiv(itemName, boxConatainer) {
    const input = document.createElement('input');
    input.value = itemName;
    input.disable = true;
    input.classList.add('item-input');
    input.type = 'text';


    const itemBox =document.createElement('div');
    itemBox.classList.add('item-box');


    const editBtn = document.createElement('button');
    editBtn.classList.add('editBtn');
    editBtn.textContent = '+';


    const removeBtn = document.createElement('button');
    removeBtn.classList.add('removeBtn');
    removeBtn.textContent = '-';


    const priorityBtn = document.createElement('button');
    priorityBtn.classList.add('priorityBtn');
    priorityBtn.textContent = 'P';


    boxConatainer.appendChild(itemBox);

    itemBox.appendChild(input);
    itemBox.appendChild(editBtn);
    itemBox.appendChild(removeBtn);
    itemBox.appendChild(priorityBtn);
  }
}


// Parallax effect fucntion
export const parallaxEffect = (arr) =>{
  const offset = window.pageYOffset;
  arr.map((x) => x.style.backgroundPositionY = offset * 0.7 + 'px');
};
