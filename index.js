// Add your doToElementsInArray() function here:
var evens = [0, 2, 4, 6, 8 , 10];

// evens.forEach((even, index, array) => {
//   // debugger;
//   console.log(`${even} is not odd!`);
// });

function square(n) {
  console.log(n * n);
};

function doToEvens(callback) {
  evens.forEach(callback);
};

// doToEvens(square);

function doToElementsInArray(array, callback) {
  array.forEach(callback);
};

// Add your changeCompletely() function here:

function changeCompletely(element, index, array) {
  array[index] = Math.floor(Math.random() * 100 + 2).toString() + ` ${array[index]}s!!!`;
}

var animals = ["dog", "cat", "squirrel"];

doToElementsInArray(animals, changeCompletely);
console.log(animals);
