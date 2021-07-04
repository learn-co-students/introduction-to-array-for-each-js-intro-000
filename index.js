function doToElementsInArray(array, callback) {
  array.forEach(callback);
}

 // Add your changeCompletely() function here:
function changeCompletely(element, index, array) {
  array[index] = Math.floor(Math.random() * 100 + 2) + ` ${element}s!!!`;
}

var animals = ["dog", "cat", "squirrel"];

doToElementsInArray(animals, changeCompletely);

console.log(animals);
