/*
Fetch data using XMLHttpRequest from https://jsonplaceholder.typicode.com/todos with type json.
One callback function should return first 5 todos.
Second callback function should return title of the first todo.
*/

const url = "https://jsonplaceholder.typicode.com/todos";
function loadData(url, type, callback01, callback02) {
  // create new request
  var xhr = new XMLHttpRequest();

  xhr.responseType = type;
  xhr.open("GET", url);

  xhr.onload = function () {
    callback01(xhr.response);
    callback02(xhr.response);
  };

  xhr.send();
}

const firstFive = (list) => {
  console.log(list.slice(0, 5));
};
const titleOfFirst = (list) => {
  console.log("Title" + list[0].title);
};
loadData(url, "json", firstFive, titleOfFirst);
