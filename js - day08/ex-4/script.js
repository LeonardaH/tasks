/*
1. Write a promise that will output success (fulfill) message after 500ms.
2. Write a promise that will output a error (reject) message after 500ms.
*/

const state = true;

const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (state) {
      resolve("Success");
    } else {
      reject("Error!!!");
    }
  }, 500);
});

myPromise
  .then((message) => {
    console.log(message);
  })
  .catch((message) => {
    console.error(message);
  });
