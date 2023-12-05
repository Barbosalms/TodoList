const inputElement = document.querySelector(".new-task-input");
const addTaskButton = document.querySelector(".new-task-button");
const tasksContainer = document.querySelector(".tasks-container");

const validateInput = () => inputElement.value.trim().length > 0;

const handleAddTask = () => {
  const inputIsValid = validateInput();

  if (!inputIsValid) {
    return inputElement.classList.add("error");
  }
  //create div from task
  const taskItemContainer = document.createElement("div");
  taskItemContainer.classList.add("task-item");
  //create task content
  const taskContent = document.createElement("p");
  taskContent.innerText = inputElement.value;

  //task completed
  taskContent.addEventListener("click", () => handleCompleteClick(taskContent));

  //create icon from trash
  const deleteItem = document.createElement("i");
  deleteItem.classList.add("fa-solid");
  deleteItem.classList.add("fa-trash-can");

  //delete task
  deleteItem.addEventListener("click", () =>
    handleDeleteClick(taskItemContainer, taskContent)
  );

  //adding two children
  taskItemContainer.appendChild(taskContent);
  taskItemContainer.appendChild(deleteItem);
  //adding children to main div (tasks-container)
  tasksContainer.appendChild(taskItemContainer);

  inputElement.value = "";
};

//checking if the task is being clicked, and adding the 'completed' class
const handleCompleteClick = (taskContent) => {
  const tasks = tasksContainer.childNodes;

  for (const task of tasks) {
    const currentTaskIsBeingClicked = task.firstChild.isSameNode(taskContent);

    if (currentTaskIsBeingClicked) {
      task.firstChild.classList.toggle("completed");
    }
  }
};

//checking if the icon trash is being clicked, and remove your div
const handleDeleteClick = (taskItemContainer, taskContent) => {
  const tasks = tasksContainer.childNodes;

  for (const task of tasks) {
    const currentTaskIsBeingClicked = task.firstChild.isSameNode(taskContent);

    if (currentTaskIsBeingClicked) {
      taskItemContainer.remove();
    }
  }
};

const handleInputChange = () => {
  const inputIsValid = validateInput();

  if (inputIsValid) {
    return inputElement.classList.remove("error");
  }
};

addTaskButton.addEventListener("click", () => handleAddTask());
inputElement.addEventListener("change", () => handleInputChange());
