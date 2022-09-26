// Input Debouncing
// ----------------
// 1. Add an input field to your HTML and add a event listener if the user writes something in it. Print the changes to the console.

const input = document.getElementById("text");

// 2. Use the debounce function to not execute console.log after every users input.
// Instead just print something to the console if the user is not typing for 300ms.
// */

const debounce = (callback, wait) => {
  let timeoutId = null;
  return (...args) => {
    window.clearTimeout(timeoutId);
    timeoutId = window.setTimeout(() => {
      callback.apply(null, args);
    }, wait);
  };
};

input.addEventListener(
  "input",
  debounce(() => {
    console.log(input.value);
  }, 300)
);
