// var evens = [0, 2, 4, 6, 8, 10];
 
// for (var i = 0; i < evens.length; i++) {
//   console.log(`${evens[i]} is not odd!`);
// }

// evens.forEach(even, index, array => {
//   debugger;
//   console.log(`${even} is not odd!`);
// });

// function evenFn(even, index, array) {
//   console.log(`${even} is not odd!`);
// }
 
// for (let i = 0; i < evens.length; i++) {
//   evenFn(evens[i], i, evens);
// }

// var evens = [0, 2, 4, 6, 8, 10];
 
// function doToEvens(callback) {
//   evens.forEach(callback);
// }


var animals = ["dog", "cat", "squirrel"];
 
doToElementsInArray(animals, changeCompletely);


// Add your doToElementsInArray() function here:
function doToElementsInArray(array, callback) {
  array.forEach(callback);
}

// Add your changeCompletely() function here:
function changeCompletely(element, index, array) {
  array[index] = Math.floor(Math.random() * 100 + 2).toString() + ` ${array[index]}s!!!`;
}

// log out animals -- pretty cool, right?
console.log(animals);