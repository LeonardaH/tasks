// Print all the book titles, authors and reading statuses in HTML. Create list items that consist of library items.
// If the book is borrowed print the item in red color. If it's not borrowed print the item in green color.
let library = [
  {
    author: "Marija Jurić Zagorka",
    title: "The Wich Of Grich",
    borrowed: true,
  },
  { author: "Antun Gustav Matoš", title: "Tired Tale", borrowed: false },
  {
    author: "Mousy Blacksmith",
    title: "Blacksmith Of His Own Luck",
    borrowed: false,
  },
];

const placeholder = document.querySelector(".placeholder");

library.forEach((book) => {
  const items = document.createElement("li");
  items.innerHTML = `
    <p>Book Author: ${book.author}</p>
    <p>Book is borrowed: ${book.borrowed}</p>
    <p>Book title:${book.title}</p>
  `;
  if (book.borrowed == true) {
    items.classList.add("red");
  } else {
    items.classList.add("green");
  }
  placeholder.appendChild(items);
});
