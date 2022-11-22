// Create an app which will ask the user to enter his name, surname and favourite dish. After he enters the name, surname and favourite dish the app should print the entered data in the format:
// "I am Name Surname, and my favourite dish is Dish"
// The data formatting part should be solved through an object method. Extra:
// o - add the functionality so the user can add more people and print the result in the console (not in alert window)
// o - add the functionality to sum the favourite dishes: "Pizza is favourite dish of 2 people"
// "Spaghetti is favourite dish of 3 people"

// selecting elem

const fname = document.getElementById("name");
const lname = document.getElementById("surname");
const fdish = document.getElementById("dish");
const printBtn = document.getElementById("print");
const addBtn = document.getElementById("add");
let personList = [];

function Person(name, surname, dish) {
  (this.name = name), (this.surname = surname), (this.dish = dish);
}

Person.prototype.getData = function () {
  return (
    "I am " +
    this.name +
    " " +
    this.surname +
    ",and my favourite dish is " +
    this.dish +
    "."
  );
};

printBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const newPerson = new Person(fname.value, lname.value, fdish.value);
  console.log(newPerson.getData());
  personList.push(newPerson);
  console.log(personList);
});
