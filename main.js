const newTask = document.querySelector(".btn");
const inputField = document.querySelector(".input-container");
const textarea = document.querySelector(".input-bar");
// const display = document.getElementsByTagName("section");
const display = document.querySelector(".displaytask");
let add = document.querySelector(".button");
let task = document.querySelector(".task");
let progBar = document.querySelector(".prog");
let editIcon = document.querySelector(".edit");
// let taskContainer = [{ done: 0, progress: 0 }];
let done = document.querySelector(".done");
let onProgress = document.querySelector(".progress");
// let taskContainer = [{ name: "Task 1", progress: 0 }];
// let donContainer = [{ name: "Task 2", done: 0 }];

let recover = localStorage.getItem("allTasks");
display.innerHTML = recover;
window.addEventListener("DOMContentLoaded", function () {
  // Restore content from local storage
  let recover = localStorage.getItem("allTasks");
  display.innerHTML = recover;

  // Attach event listeners to the recovered content
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

// let savedTask = localStorage.getItem("task");
// if(savedTask) {
//  task.innerHTML = savedTask++;
// }

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

    // display[0].appendChild(task);

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

    let checkmarkIcon = document.querySelectorAll(".checkmark");
    checkmarkIcon.forEach((btn) => {
      btn.addEventListener("click", check);
    });
    let editIcon = document.querySelectorAll(".edit");
    editIcon.forEach((btn) => {
      btn.addEventListener("click", edit);
    });

    let undoIcon = document.querySelectorAll(".undo");
    undoIcon.forEach((btn) => {
      btn.addEventListener("click", undo);
    });
  }
});

function check(e) {
  if (e.target.classList.contains("checkmark")) {
    e.target.parentElement.parentElement.firstElementChild.style.textDecoration =
      "line-through";
    e.target.parentElement.parentElement.firstElementChild.style.color = "red";
  }
}

function del(e) {
  if (e.target.classList.contains("delete")) {
    e.target.parentElement.parentElement.remove();
  }
}

function undo(e) {
  if (e.target.classList.contains("undo")) {
    e.target.parentElement.parentElement.firstElementChild.style.textDecoration =
      "none";
    e.target.parentElement.parentElement.firstElementChild.style.color =
      "black";
  }
}

function edit(e) {
  let text = e.target.closest(".task");
  let mainText = text.querySelector("p").textContent;
  let editedText = prompt("Enter A New Text", mainText);
  if (editedText === null || editedText === undefined) {
    return;
  } else text.querySelector("p").textContent = editedText;
}

// function updateArrayObj() {
//   taskContainer.forEach((task) => {
//     task.progress++;
//     onProgress.innerHTML = `Todo On Progress: ${task.progress}`;
//   });
//   console.log(taskContainer);
// }

// function DoneBar() {
//   donContainer.forEach((don) => {
//     don.done++;
//     done.innerHTML = `Todo Done: ${don.done}`;
//   })
//   console.log(donContainer);
// }

// function storage() {
//     localStorage.setItem("data", add.innerHTML)
// }

// // localStorage.setItem("data", task)

// function showStorage() {
//   localStorage.getItem("data");
// }
// showStorage();

// const ages = [32, 33, 16, 40];
// const result = ages.filter(check);
// console.log(result);

// function check(age) {
//   return  age >= 18;
// }

// const numbers = [1, 2, 3, 4 ];
// const squares = numbers.map(function(n){
//   return n * n;
// })

// console.log(squares);
// console.log(display);
