let todoInput = document.querySelector("#todo-text");
let todoForm = document.querySelector("#todo-form");
let todoList = document.querySelector("#todo-list");
let todoCountSpan = document.querySelector("#todo-count");

let todos = [];



function renderTodos() {
    // set the text content of the `todoList` to an empty string.
    todoList.innerHTML = "";

    // `todoCountSpan` should show the total count of todos on the page.
    todoCountSpan.textContent = todos.length;
    
    // loop over the `todos` array 
    for ( var i = 0; i < todos.length; i++){
        var todo = todos[i];
        console.log(todo)
            // create an li element for each index of the array
        var li = document.createElement("li");
        // set the content of the li to the value of the current array index
        li.textContent = todo;
        // the li should be appended to `todoList`
        todoList.appendChild(li);
    }
}

  // When form is submitted...
    todoForm.addEventListener("submit", function(event) {
        event.preventDefault();
  
        var todoText = todoInput.value.trim();
  
    // Return from function early if submitted todoText is blank
        if (todoText === "") {
        return;
        }
  
    // Add new todoText to todos array, clear the input
        todos.push(todoText);
        todoInput.value = "";
  
    // Re-render the list
        renderTodos();
    });