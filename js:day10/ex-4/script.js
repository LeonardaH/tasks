/* 1. Reuse your scrollable page from the last exercise.
2. Observe an element that is out of the initial viewport and log a message to the console as soon as the element becomes fully visible. 
Extra: 3. Colorize (or any other way) the item which inside the viewport to make it more visible for the user. */

const options = {
  rootMargin: "10px",
  threshold: 0.5,
};

const callback = (entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      console.log(entry);
      entry.target.classList.add("active");
    } else {
      entry.target.classList.remove("active");
    }
  });
};

const observer = new IntersectionObserver(callback, options);

const targets = document.querySelectorAll("section");

targets.forEach((target) => {
  observer.observe(target);
});
