// calls .forEach on the given array using the given callback function
function doToElementsInArray(array, callback) {
  array.forEach(callback);
}

// turns every element in an array into a new string
function changeCompletely(element, index, array) {
  array[index] = Math.floor(Math.random() * 100 + 2).toString() + ` ${array[index]}s!!!`;
}
