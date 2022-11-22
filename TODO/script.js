// • There is a label with text: ”Todo”
// • Below the label is the input field
// • Below the input field is the Submit button
// • When a user submits his todo it should be added below the button.
// o iftheinputfieldisemptyandsubmitbuttonclickedshowalert
// o message“Inputfieldcan'tbeempty”
// • Each todo item has a red X on the right side and bottom line.
// o whentheuserclickstheXbuttonshowconfirmdialogwithtext"Areyousure?”
// o ifconfirmeddeletetheitemfromthelist,otherwisedonothing
// • Please see attached design example, feel free to design it as you want

const input = document.getElementById("todo");
const submit = document.getElementById("btn");
const list = document.getElementById("list");
// const deleteBtn = document.querySelector("#delete-btn");
// const item = document.getElementById("item");

const addList = () => {
  const item = document.createElement("li");
  item.innerText = input.value;
  const deleteBtn = document.createElement("button");
  const breakLine = document.createElement("br");
  deleteBtn.innerText = "X";
  item.appendChild(deleteBtn);
  item.appendChild(breakLine);
  list.appendChild(item);
  deleteBtn.addEventListener("click", () => {
    alert("Are you sure?");
    item.remove();
  });
};

const handleSubmit = (event) => {
  event.preventDefault();

  if (input.value === "") {
    alert("Input field cant be empty");
  } else {
    addList();
    input.value = "";
  }
};

submit.addEventListener("click", handleSubmit);

// deleteBtn.addEventListener("click", () => {
//   item.remove();
// });
