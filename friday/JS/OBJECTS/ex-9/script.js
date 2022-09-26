// Create the function that takes an array with objects and returns the sum of people's budgets.
// Extra:
// - add a button to raise every salary for 10%
// - add a button to decrease every salary for 10%

let getBudgets = [
  { name: "John", age: 21, budget: 23000 },
  { name: "Steve", age: 32, budget: 40000 },
  { name: "Martin", age: 16, budget: 2700 },
];

const budgetSum = getBudgets.reduce((prev, curr) => {
  return prev + curr.budget;
}, 0);

console.log(budgetSum);

// selecting elem

const increaseBtn = document.getElementById("add");
const decreaseBtn = document.getElementById("remove");

increaseBtn.addEventListener("click", () => {
  getBudgets.forEach((elem) => console.log(elem));
});

console.log(filteredArr);
