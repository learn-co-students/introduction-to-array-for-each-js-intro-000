// Add your doToElementsInArray() function here:


// Add your changeCompletely() function here:


var evens = [0, 2, 4, 6, 8, 10];

evens.forEach((even, index , array) => {
  debugger;
  console.log(`${even} is not odd!`);
});


function doToElementsInArray(array, callback) {
  array.forEach(callback);
}

function changeCompletely(element, index, array) {
  array[index] = Math.floor(Math.random() * 100 + 2).toString() + ` ${array[index]}s!!!`;
}

var animals = ["dog", "cat", "squirrel"];

doToElementsInArray(animals, changeCompletely);

// log out animals -- pretty cool, right?
console.log(animals);
