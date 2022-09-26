// Create a JavaScript function to sort the following array of objects by title value:
let library = [
  {
    author: "Marija Jurić Zagorka",
    title: "The Wich Of Grich",
    libraryID: 1254,
  },
  { author: "Antun Gustav Matoš", title: "Tired Tale", libraryID: 4264 },
  {
    author: "Mousy Blacksmith",
    title: "Blacksmith Of His Own Luck",
    libraryID: 3245,
  },
];

library.sort((a, b) => {
  if (a.title < b.title) {
    return -1;
  } else if (a.title > b.title) {
    return 1;
  }
});

console.log(library);
