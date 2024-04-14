

const newTask = document.querySelector(".btn");
const inputField = document.querySelector(".input-container");
const textarea = document.querySelector(".input-bar");
const display = document.getElementsByTagName("section");
let add = document.querySelector(".button");
let task = document.querySelector(".task");
let progBar = document.querySelector(".prog");
let editIcon = document.querySelector(".edit");
// let taskContainer = [{ done: 0, progress: 0 }];
let done = document.querySelector(".done");
let onProgress = document.querySelector(".progress");
let taskContainer = [{ name: "Task 1", progress: 0 }];
let donContainer = [{ name: "Task 2", done: 0 }];

newTask.addEventListener("click", function () {
  inputField.style.display = "flex";
});

add.addEventListener("click", function () {
  let textLength = textarea.value.length;
  if (textLength === 0) {
    alert("Please enter your task");
  } else {
    let task = document.createElement("div");
    task.className = "task";

    task.innerHTML = `  <div class="text"><p>${textarea.value}</p></div>
    <div class="icon">
      <img src="img/trash 1.svg" class="delete" />
      <img src="img/pencil-square 1.svg" class="edit" />
      <img src="img/check-circle 1.svg" class="checkmark" />
      <img src="img/undo.svg" class="undo">
    </div>`;
    display[0].appendChild(task);
    textarea.value = "";
    inputField.style.display = "none";
    

    let deleteIcon = document.querySelectorAll(".delete");
    deleteIcon.forEach((btn) => {
      btn.addEventListener("click", del);
    });

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



function del(e) {
  if (e.target.classList.contains("delete")) {
    e.target.parentElement.parentElement.remove();
    taskContainer.forEach((task) => {
      task.progress--;
      onProgress.innerHTML = `Todo On Progress: ${task.progress}`;
    });
  }
}

function check(e) {
  if (e.target.classList.contains("checkmark")) {
    e.target.parentElement.parentElement.firstElementChild.style.textDecoration =
      "line-through";
    e.target.parentElement.parentElement.firstElementChild.style.color = "red";

    // DoneBar(donContainer)

    // taskContainer.forEach((task) => {
    //   task.progress--;
    //   onProgress.innerHTML = `Todo On Progress: ${task.progress}`;
    // });
  }
}

function undo(e) {
  if (e.target.classList.contains("undo")) {
    e.target.parentElement.parentElement.firstElementChild.style.textDecoration =
      "none";
    e.target.parentElement.parentElement.firstElementChild.style.color =
      "black";

    // donContainer.forEach((don) => {
    //   don.done--;
    //   done.innerHTML = `Todo Done: ${don.done}`;
    // })

    // taskContainer.forEach((task) => {
    //   task.progress++;
    //   onProgress.innerHTML = `Todo On Progress: ${task.progress}`;
    // });
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
