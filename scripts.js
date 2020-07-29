function addTodo() {
    // TODO : get the ID 'todoInput'
    const todoText = document.getElementById('todoInput').value;
    
    // create new elements to add
    let newLI = document.createElement('li');
    let textNode = document.createTextNode(todoText);
    let button = document.createElement('button');
    
    // add attributes and prep elements
    newLI.setAttribute('class', 'newLi')
    button.innerHTML = "Delete";
    button.setAttribute("class","li_btn")
    
    // TODO : APPEND THE BUTTON TO THE LI
    newLI.appendChild(textNode);
    newLI.appendChild(button)
    
    //append to List
    document.querySelector('.todoList').appendChild(newLI);
  
    // TODO : CLEAR THE INPUT AFTER SUBMIT
    document.getElementById('todoInput').value = null;
  }