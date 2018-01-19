
var animals = ["dog", "cat", "squirrel"];
 
doToElementsInArray(animals, changeCompletely);


// Add your doToElementsInArray() function here:
function doToElementsInArray(array, callback) {
  array.forEach(callback);
}

// // Add your changeCompletely() function here:
// function changeCompletely(element, index, array) {
//   array[index] = Math.floor(Math.random() * 100 + 2).toString() + ` ${array[index]}s!!!`;
// }

function changeCompletely(element, index, array) {
  array[index] = element + '!!!'
}

// log out animals -- pretty cool, right?
console.log(animals);