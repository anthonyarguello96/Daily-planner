
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
}
