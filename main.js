const newTask = document.querySelector(".btn");
const inputField = document.querySelector(".input-container");
const textarea = document.querySelector(".input-bar");
const display = document.querySelector(".displaytask");
let task = document.querySelector(".task");
let add = document.querySelector(".button");
let progBar = document.querySelector(".prog");
let editIcon = document.querySelector(".edit");
let done = document.querySelector(".done");
let onProgress = document.querySelector(".progress");

window.addEventListener("DOMContentLoaded", function () {
  let recover = localStorage.getItem("allTasks");
  display.innerHTML = recover;

  let deleteIcon = document.querySelectorAll(".delete");
  deleteIcon.forEach((btn) => {
    btn.addEventListener("click", del);
  });

  let editIcon = document.querySelectorAll(".edit");
  editIcon.forEach((btn) => {
    btn.addEventListener("click", edit);
  });

  let checkIcon = document.querySelectorAll(".checkmark");
  checkIcon.forEach((btn) => {
    btn.addEventListener("click", check);
  });

  let undoIcon = document.querySelectorAll(".undo");
  undoIcon.forEach((btn) => {
    btn.addEventListener("click", undo);
  });
});

newTask.addEventListener("click", function () {
  inputField.style.display = "flex";
});

add.addEventListener("click", function () {
  const textarea = document.querySelector(".input-bar");
  let textLength = textarea.value.length;
  if (textLength === 0) {
    alert("Please enter your task");
  } else {
    let task = document.createElement("div");
    task.className = "task";

    task.innerHTML = `<div class="text"><p>${textarea.value}</p></div>
    <div class="icon">
      <img src="img/trash 1.svg" class="delete" />
      <img src="img/pencil-square 1.svg" class="edit" />
      <img src="img/check-circle 1.svg" class="checkmark" />
      <img src="img/undo.svg" class="undo">
    </div>`;

    display.appendChild(task);
    localStorage.setItem("allTasks", display.innerHTML);
    textarea.value = "";
    inputField.style.display = "none";
    let deleteIcon = document.querySelectorAll(".delete");
    deleteIcon.forEach((btn) => {
      btn.addEventListener("click", del);
    });

    // for(i=0; i<deleteIcon.length; i++){
    //   deleteIcon[i].addEventListener("click", del)
    // }

    let editIcon = document.querySelectorAll(".edit");
    editIcon.forEach((btn) => {
      btn.addEventListener("click", edit);
    });
    let checkmarkIcon = document.querySelectorAll(".checkmark");
    checkmarkIcon.forEach((btn) => {
      btn.addEventListener("click", check);
    });

    let undoIcon = document.querySelectorAll(".undo");
    undoIcon.forEach((btn) => {
      btn.addEventListener("click", undo);
    });
  }
});

function delFromLocalStorage(task) {
  let allTasks = localStorage.getItem("allTasks");
  let updatedTasks = allTasks.replace(task.outerHTML, "");
  localStorage.setItem("allTasks", updatedTasks);
}
function del(event) {
  let task = event.target.closest(".task");
  task.remove();
  delFromLocalStorage(task);
}

function updateCheck(task) {
  let thisTasks = localStorage.getItem("allTasks");
  thisTasks = task;
  console.log(thisTasks);
  localStorage.setItem("allTasks", thisTasks.outerHTML);
}

function updateUndo(task) {
  let undoneTasks = localStorage.getItem("allTasks");
  undoneTasks = task;
  console.log(undoneTasks);
  localStorage.setItem("allTasks", undoneTasks.outerHTML);
}

function updateEdit(task) {
  let editedText = display.innerHTML;
  localStorage.setItem("allTasks", editedText);
}

function check(e) {
  if (e.target.classList.contains("checkmark")) {
    let task = e.target.closest(".task");
    console.log("Check clicked, task element:", task);
    task.firstElementChild.style.textDecoration = "line-through";
    task.firstElementChild.style.color = "red";
    updateCheck(task);
  }
}

function undo(e) {
  if (e.target.classList.contains("undo")) {
    let task = e.target.closest(".task");
    console.log("Undo clicked, task element:", task);
    task.firstElementChild.style.textDecoration = "none";
    task.firstElementChild.style.color = "black";
    updateUndo(task);
  }
}

function edit(e) {
  let text = e.target.closest(".task");
  let mainText = text.querySelector("p").textContent;
  let editedText = prompt("Enter A New Text", mainText);
  if (editedText === null || editedText === undefined) {
    return;
  } else {
    text.querySelector("p").textContent = editedText;
    updateEdit(task);
  }
}
