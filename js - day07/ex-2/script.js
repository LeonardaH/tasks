// Write a click handler for the buttons in the list.
// When a button is clicked it’s id should be logged to the console alongside with the count of
// how many times the button was clicked.
// Keep count of the clicks with data attributes. The counter attribute should be called data-
// click-coun

const btn = document.querySelectorAll("button");

btn.forEach((button) => {
  button.dataset.clickCount = 0;
  let count = 0;
  button.addEventListener("click", function () {
    count++;
    button.dataset.clickCount = count;
    console.log(
      `Button: ${button.dataset.id} Clicks: ${button.dataset.clickCount}`
    );
  });
});
