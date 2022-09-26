/*
Scrolling
---------
1. Create a page that is scrollable, meaning add more content than the window size can fit.
2. Add a button on the bottom which scrolls to the top of the page.
3. Add an event listener which logs a message when you scroll to the top of the page.
*/

const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
  window.scrollTo(0, 0, "smooth");
  console.log("top");
});

window.addEventListener("scroll", () => {
  if (window.scrollY === 0) {
    console.log("I am on the top of the page");
  }
});
