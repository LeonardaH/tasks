// Create two buttons in html. One that has a name "Change style" and another one which the name "Add class". Also create a square (black background) which has a class "box". When the user clicks on the button "Change style" the square turns red. When the user clicks on the "Add class" button the square gets a class named "border". The "border" class gives the square a green border.

let box = document.querySelector(".box");
let changeStyleButton = document.querySelector(".change-style");
let addClassButton = document.querySelector(".add-class");

changeStyleButton.addEventListener("click", function () {
  box.style.backgroundColor = "red";
});

addClassButton.addEventListener("click", function () {
  box.classList.add("border");
});
