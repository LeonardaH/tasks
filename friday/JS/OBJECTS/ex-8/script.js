// Create a function that takes in an array (slot machine outcome) and returns true if all elements in the array are identical, and false otherwise. The array will contain 4 elements.
// Make a random array item generator to test your function

const randomArr = [];

function slotMachine(randomArr) {
  let result = randomArr.every((element) => {
    if (element === randomArr[0]) {
      return true;
    }
  });
  return result;
}

for (let i = 0; i < 4; i++) {
  randomArr.push(Math.floor(Math.random() * 2));
}

console.log(randomArr);
console.log(slotMachine(randomArr));
