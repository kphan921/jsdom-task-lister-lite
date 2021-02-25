const form = document.querySelector('#create-task-form');
const toDoList = document.querySelector('#tasks')

form.addEventListener('submit', (e) => {
  e.preventDefault();

  let li = document.createElement('li') 
  li.textContent= e.target['new-task-description'].value;
  toDoList.appendChild(li);
  button = document.createElement('button');
  button.textContent = 'X';
  button.style.width = '20px' 
  button.style.height = '20px'
  button.style.fontSize = '10px'
  button.style.background = 'red';
  button.style.textAlign = 'center'
  li.appendChild(button);
  e.target['new-task-description'].value = '';

  button.addEventListener('click', (e) => {
    li.remove();
  })
})


