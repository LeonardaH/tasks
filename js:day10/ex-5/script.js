/*
Intersection Observer - Pokemon
-------------------------------
1. Create a page with multiple sections (each has a height of 100vh)
2. In each section you should provide a id for a pokemon. If observer recognize your section you should fetch the data of this specific pokemon and show an image of it in the middle of the section.
3. The observer should load the image before it's entering the viewport.

Extra:
4. After the pokemon is loaded, remove the observe on the target element

Note:
Check if your Pokemon is not loaded before you entering the section in the document.
Data can fetched like:
https://pokeapi.co/api/v2/pokemon/${id}
*/

const container = document.getElementById("container");

const options = {
  root: document.querySelector("#container"),
  rootMargin: "0px 0px 50% 0px",
  threshold: 0,
};

const getImage = (pokemon) => {
  const el = document.createElement("img");
  el.setAttribute("src", pokemon.sprites.front_default);
  el.setAttribute("alt", pokemon.name);
  return el;
};

const callback = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const id = entry.target.dataset.id;
      console.log("LOADING...", id);
      const url = `https://pokeapi.co/api/v2/pokemon/${id}/`;
      fetch(url)
        .then((res) => res.json())
        .then((json) => {
          entry.target.innerHTML = "";
          entry.target.appendChild(getImage(json));
          observer.unobserve(entry.target);
        });
    } else {
    }
  });
};

const observer = new IntersectionObserver(callback, options);

const targets = document.querySelectorAll("section");
targets.forEach((target) => {
  observer.observe(target);
});
