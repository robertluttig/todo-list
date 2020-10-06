let todoInput = document.querySelector("#todo-text");
let todoForm = document.querySelector("#todo-form");
let todoList = document.querySelector("#todo-list");
let todoCountSpan = document.querySelector("#todo-count");

let todos = ["Learn HTML", "Learn CSS", "Learn JavaScript"];

renderTodos();

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
  console.log(li)
  // set the content of the li to the value of the current array index
  li.textContent = todo;
  // the li should be appended to `todoList`
  todoList.appendChild(li);
  }
}