// Write a JavaScript function that creates a table, accept row, column numbers from the user, and input row-column number as content (e.g. Row-0 Column-0) of a cell.

// selecting elem

const table = document.querySelector("table");
const tbody = document.querySelector("tbody");
const numRow = document.getElementById("numRow");
const numCol = document.getElementById("numCol");
const createBtn = document.getElementById("btn");
const deleteBtn = document.getElementById("delete");

const createTable = (x, y) => {
  for (let i = 0; i < x; i++) {
    let row = document.createElement("tr");
    for (let j = 0; j < y; j++) {
      let cell = document.createElement("td");
      let cellText = document.createTextNode(
        "cell is row " + j + ", column " + i
      );
      cell.appendChild(cellText);
      row.appendChild(cell);
    }
    tbody.appendChild(row);
  }
};

createBtn.addEventListener("click", () => {
  createTable(numCol.value, numRow.value);
});
