// Cocktail Search Endpoint documentation: https://www.thecocktaildb.com/api.php

// 1. Create the layout
// a. Add a <form> with an input field and a button to your DOM
// 2. Add functionality
// a. prevent the default behavior of the browser if you click on your submit
// button
// b. fetch data from the endpoint depending on what the user has typed in the
// input field (search cocktail by name)
// i. make sure you are using new FormData and new URL to prepare your
// fetch URL
// c. print the data on the console
// 3. Showing results
// a. If the user submits your form, instead of print the results to the console,
// show the results in the DOM (if you like you can add CSS here). Use any data
// you like, but at least one image (thumbnail) and the name of the cocktail
// should be present.
// 4. Changing the functionality
// a. Remove the button from your form
// b. Now search for cocktails if the user enters any key into the input
// 5. Better performance
// a. Now add a debounce to your search, so that the search will not be fired after

// selecting elements

const form = document.getElementById("form");
const search = document.querySelector("button");
const placeholder = document.querySelector(".placeholder");
const api = "https://www.thecocktaildb.com/api/json/v1/1/search.php";

const getDrinks = async () => {
  //   e.preventDefault();

  const formData = new FormData(form);
  const url = new URL(api);
  url.searchParams.set("s", formData.get("drinks"));
  try {
    const response = await fetch(url.href);
    const data = await response.json();
    const drinks = data.drinks;
    console.log(drinks);
    reset();
    drinks.forEach((drink) => {
      displayDrinks(drink);
    });
  } catch (error) {
    console.log(error);
  }
};

const displayDrinks = (drink) => {
  const template = `
    <article>
        <img src="${drink.strDrinkThumb}"></img>
        <h1>${drink.strAlcoholic}</h1>
        <p>${drink.strCategory}</p>
        <ul>
            <li>${drink.strIngredient1}</li>
            <li>${drink.strIngredient2}</li>
        </ul>
    </article>
    `;
  placeholder.insertAdjacentHTML("beforeend", template);
};

const reset = () => {
  placeholder.innerHTML = "";
};

// search.addEventListener("click", getDrinks);   // I used this when I had to use submit button

// debounce function

const debounceFun = (func, wait) => {
  let timer;
  return (...arg) => {
    window.clearTimeout(timer);
    timer = window.setTimeout(() => {
      func.apply(this.arg);
    }, wait);
  };
};

form.addEventListener("input", debounceFun(getDrinks, 500));
