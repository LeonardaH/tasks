// 0. Create a function isEven that returns a Promise. The function has one param which is called number.
// If the number is even it should return a message "Number XY is even". If not it should return a message "Number XY is not even."
// 1. use fetch() method to get data from https://jsonplaceholder.typicode.com/todos
// 2. Print the first ten results to the console
// 3. Add all ten entries to the DOM by using template literals (in the way you like to see it)
// */

const even = (number) => {
  const promise = new Promise((resolve, reject) => {
    if (number % 2 === 0) {
      resolve(`Number ${number} is even.`);
    } else {
      reject(`Number ${number} is not even.`);
    }
  });

  return promise;
};

even(7)
  .then((message) => {
    console.log(message);
  })
  .catch((message) => {
    console.log(message);
  });

const url = "https://jsonplaceholder.typicode.com/todos";

fetch(url)
  .then((result) => result.json())
  .then((json) => {
    const firstTen = json.slice(0, 10);
    console.log(firstTen);
    firstTen.forEach((element) => {
      const div = document.createElement("div");
      div.innerHTML = `
      <ul>
        <li>User id: ${element.userId}</li>
        <li>Id: ${element.id}</li>
        <li>Title: ${element.title}</li>
        <li>Completed: ${element.completed}</li>
      </ul>
      `;
      document.body.appendChild(div);
    });
  });
