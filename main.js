const addTaskButton = document.querySelector(".addTask");
const todoInput = document.querySelector(".todoInput");
const todosContainer = document.querySelector(".todos");

const toggleComplete = (event) => {
  const { parentElement } = event.currentTarget;

  const isComplete = [...parentElement.classList].some((className) => className === "completed"
  );

  if (isComplete) {
  event.currentTarget.innerText = 'Todo'
  } else {
  event.currentTarget.innerText = "Complete"
  }
  event.currentTarget.parentElement.classList.toggle("completed");
  };
const removeItem = (event) => {
  todosContainer.removeChild(event.currentTarget.parentElement);
};

const renderTodoItem = (todoText) => {
  const todoItemElement = document.createElement("li");
  todoItemElement.classList.add("todoItem");

  
  const completeButton = document.createElement("button")
  completeButton.classList.add("completeButton")
  completeButton.innerText = "Complete"
  completeButton.addEventListener('click', toggleComplete)
  todoItemElement.appendChild(completeButton);
  
  const deleteButton = document.createElement("button")
  deleteButton.classList.add("deleteButton")
  deleteButton.innerText = "Delete"
  deleteButton.addEventListener('click', removeItem)
  todoItemElement.appendChild(deleteButton);
  
  const textElement = document.createElement("p")
  textElement.classList.add("todoText")
  textElement.innerText = todoText
  todoItemElement.appendChild(textElement);

  todosContainer.appendChild(todoItemElement);
  todoInput.value = "";
  todoInput.focus();
}

const addTask = () => {
  if (todoInput.value === "") {
    alert("Input bos olamaz");
  } else {
    renderTodoItem(todoInput.value)
  }
};

addTaskButton.addEventListener('click', addTask);