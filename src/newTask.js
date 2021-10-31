export function createNewTaskDiv() {
  const currentDiv = document.getElementById("current-task");

  const title = document.createElement("h3");
  title.innerText += taskName.value;

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

  newCurrentDiv.appendChild(title);
  newCurrentDiv.appendChild(InfoBox);
  newCurrentDiv.appendChild(doneBTN);
  newCurrentDiv.appendChild(deleteBTN);

  currentDiv.appendChild(newCurrentDiv);
}
