// Create a JavaScript function to merge two arrays and remove all duplicate elements. let array1 = [10, 22, 32, 61, 2312313, 205]; let array2 = [32, 30, 1, 61, 205,
// 102];

let array1 = [10, 22, 32, 61, 2312313, 205];
let array2 = [32, 30, 1, 61, 205, 102];

const array = array1.concat(array2);
let uniqueChars = [...new Set(array)];

console.log(array);
console.log(uniqueChars);
