// Add to-do function
export const addToDo = (inputF, container)=>{
  const toDo = document.createElement('p');
  toDo.innerText =inputF.value;
  container.appendChild(toDo);
  inputF.value = '';
  toDo.addEventListener('click', ()=>{
    toDo.classList.add('done');
  });
  toDo.addEventListener('dblclick', ()=>{
    container.removeChild(toDo);
  });
};


// Parallax effect fucntion
export const parallaxEffect = (arr) =>{
  const offset = window.pageYOffset;
  arr.map((x) => x.style.backgroundPositionY = offset * 0.7 + 'px');
};
