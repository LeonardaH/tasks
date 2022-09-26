/*
1. Create an input and a button
2. If the user clicks the button, the input value should be append to the url as param ?inputValue=INPUT_VALUE

Extra:
- add a reset button that removes all search params from the URL
*/

const submit = document.querySelector("#submit");
const reset = document.querySelector("#reset");
const url = new URL(document.location);

submit.addEventListener("click", () => {
  const inputValue = document.querySelector("#input").value;
  url.searchParams.set("inputValue", inputValue.toUpperCase());
  window.history.pushState({}, "", url);
  console.log(url);
});

reset.addEventListener("click", () => {
  url.searchParams.delete("inputValue");
  window.history.pushState({}, "", url);
});
