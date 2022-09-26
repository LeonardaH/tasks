// - make a function using a promise that accepts seconds
// - a message is printed (console.log) after the entered seconds
// - if the input is not a number, print a message inside the catch callback

const promise = (seconds) => {
  return new Promise((resolve, reject) => {
    if (isNaN(seconds)) {
      reject("Wrong input");
    }
    setTimeout(() => {
      resolve("console log");
    }, seconds * 1000);
  });
};

promise("Lea")
  .then((response) => console.log(response))
  .catch((error) => console.log(error));

// async example

window.addEventListener("load", async function () {
  let func = async (sec) => {
    let timeout = await new Promise((resolve, reject) => {
      setTimeout(() => {
        if (isNaN(sec)) {
          reject("Not a number");
        } else {
          resolve("Done");
        }
      }, sec * 1000);
    });
    console.log(timeout);
  };
  func(2);
});
