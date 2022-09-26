// Create a page that has enough content to scroll
// 2. Add the following fields:
// a. Input field for x-coordinate/left (just accept numbers)
// b. Input field for y-coordinate/top (just accept numbers)
// c. Checkbox for scrolling smooth
// d. Button for execution
// 3. If the user clicks the button the view should scroll to the position that was provided by the input fields. If checkbox is checked the scrolling should be using the smooth behavior.

// selecting elements

const scrollX = document.getElementById("x");
const scrollY = document.getElementById("y");
const smooth = document.getElementById("smooth");
const button = document.getElementById("btn");

// handling scroll

const scrolling = () => {
  if (smooth.checked) {
    window.scroll({
      top: scrollY.value,
      left: scrollX.value,
      behavior: "smooth",
    });
  } else {
    window.scroll({
      top: scrollY.value,
      left: scrollX.value,
    });
  }
  reset();
};

const reset = () => {
  (scrollY.value = ""), (scrollX.value = ""), (smooth.checked = false);
};

button.addEventListener("click", scrolling);
