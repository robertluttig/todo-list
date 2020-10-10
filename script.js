let todoInput = document.querySelector("#todo-text");
let todoForm = document.querySelector("#todo-form");
let todoList = document.querySelector("#todo-list");
let todoCountSpan = document.querySelector("#todo-count");

let todos = [];

init();

function init() {
  // retrieve the todos 
  var storedTodos = JSON.parse(localStorage.getItem("todos"));

  // If todos were retrieved from localStorage, update the todos array to it
  if (storedTodos !== null) {
    todos = storedTodos;
  }

  // Render todos to the DOM
  renderTodos();
}

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
        // create a buttom for each index of the array
        var btn = document.createElement("button");
        btn.textContent = "Complete";
        // set the content of the li to the value of the current array index
        li.textContent = todo;
        //set the data-index for each li element
        li.setAttribute('data-index', i);
        // li appended to `todoList`
        todoList.appendChild(li);
        // button appended to `li element`
        li.appendChild(btn);
    }
}

function storeTodos() {
    // stringify  todos array and save it to the "todos" key
    localStorage.setItem("todos", JSON.stringify(todos));
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
        
    // Store updated todos in localStorage
        storeTodos();
    // Re-render the list
        renderTodos();
    });

    todoList.addEventListener("click",function(event){
        var element = event.target;

    // If that element is a button...
    if (element.matches("button")) {
        // Get its data-index value and remove the todo element from the list
        var index = element.parentElement.getAttribute("data-index");
        todos.splice(index, 1);

        // Re-render the list
        renderTodos();
     }
    });