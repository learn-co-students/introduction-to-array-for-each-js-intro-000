// Add your doToElementsInArray() function here:
function doToElementsInArray(array, callback) {
  array.forEach(callback);
}

// Add your changeCompletely() function here:
function changeCompletely(element, index, array) {
  array[index] = (Math.random() * 100).toString() + '!!!'
}
var animals = ["dog", "fish", "cat"];

doToElementsInArray(animals, changeCompletely);
