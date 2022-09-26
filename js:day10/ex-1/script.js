// Add an event listener for resize the window object and print the width and height of the website content to the console.

// Display the current screen ratio in the center of the page.

let width = document.querySelector("#width");
let height = document.querySelector("#height");

const debounce = (callback, wait) => {
  let timeoutId = null;
  return (...args) => {
    window.clearTimeout(timeoutId);
    timeoutId = window.setTimeout(() => {
      callback.apply(null, args);
    }, wait);
  };
};

window.addEventListener(
  "resize",
  debounce(() => {
    console.log(`Width: ${window.innerWidth}, Height: ${window.innerHeight}`);
    width.innerHTML = `Width: ${window.innerWidth}`;
    height.innerHTML = `Height: ${window.innerHeight}`;
  }, 1000)
);
