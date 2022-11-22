// 1. Create a page that have enough content to scroll.
// 2. Add 5 images somewhere on the page (but they shouldn’t load directly, so not set src attribute
// at the beginning)
// 3. Create an intersection observer that checks if the image is in the root (viewport) or 50%
// underneath and load the image (by setting the src attribute)
// 4. After loading it once remove the observer on the specific element

const options = {
  rootMargin: "0px",
  threshold: 0.5,
};

let id = 1;

const callback = (entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const image = document.createElement("img");
      image.src = `images/image${id}.jpg`;
      image.alt = `image${id}`;
      image.style.width = "400px";
      entry.target.appendChild(image);
      id++;
      observer.unobserve(entry.target);
    }
  });
};

const observer = new IntersectionObserver(callback, options);

// selecting element

const targets = document.querySelectorAll("section");

targets.forEach((target) => {
  observer.observe(target);
});
