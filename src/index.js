const addBtn = document.getElementById("addBTN");
const taskForm = document.getElementById("new-task-form");
const form = document.getElementById("task-form");
const submitBtn = document.getElementById("submitBTN");
const taskName = document.getElementById("task-name");
const taskInfo = document.getElementById("task-info");
const currentDiv = document.getElementById("current-task");
const deleteBTN = document.getElementById("deleteBTN");
const doneBTN = document.getElementById("doneBTN");
const taskLink = document.getElementById("task-link");
const taskFinished = document.getElementById("finished-link");

function handleForm(event) {
  event.preventDefault();
}
taskForm.addEventListener("submit", handleForm);

addBtn.addEventListener("click", () => {
  displayTaskForm();
});

function displayTaskForm() {
  if (taskForm.style.display === "flex") {
    taskForm.style.display = "none";
  } else {
    taskForm.style.display = "flex";
  }
}

submitBtn.addEventListener("click", () => {
  let messages = [];

  if (taskName.value === "" || taskName.value == null) {
    messages.push("name is required");
  }

  if (taskInfo.value === "" || taskInfo.value == null) {
    messages.push("info is required");
  }

  if (messages.length > 0) {
    alert("Field Required");
  } else {
    const currentDiv = document.getElementById("current-task");

    const title = document.createElement("h3");
    title.innerText += taskName.value;
    title.classList.add("newTaskTitle");

    const InfoBox = document.createElement("p");
    InfoBox.innerText += taskInfo.value;

    const doneBTN = document.createElement("button");
    doneBTN.classList.add("doneBTN");
    doneBTN.innerText += "Done";

    const deleteBTN = document.createElement("button");
    deleteBTN.classList.add("deleteBTN");
    deleteBTN.innerText += "Delete";

    const newCurrentDiv = document.createElement("div");
    newCurrentDiv.classList.add("newCurrentDiv");

    taskName.value = "";
    taskInfo.value = "";

    newCurrentDiv.appendChild(title);
    newCurrentDiv.appendChild(InfoBox);
    newCurrentDiv.appendChild(doneBTN);
    newCurrentDiv.appendChild(deleteBTN);

    currentDiv.appendChild(newCurrentDiv);
    doneBTN.addEventListener("click", () => {
      newCurrentDiv.style.backgroundColor = "green";
    });

    deleteBTN.addEventListener("click", () => {
      newCurrentDiv.remove();
    });

    taskLink.addEventListener("click", () => {
      taskForm.style.display = "none";
      newCurrentDiv.style.display = "flex";
    });

    taskFinished.addEventListener("click", () => {
      if (newCurrentDiv.style.backgroundColor !== "green") {
        newCurrentDiv.style.display = "none";
      }
    });
  }
});
