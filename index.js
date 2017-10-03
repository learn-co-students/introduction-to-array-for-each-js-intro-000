// Add your doToElementsInArray() function here:
function doToElementsInArray(array, callback) {
  array.forEach(callback);
}

// Add your changeCompletely() function here:
function changeCompletely(e, i, array) {
  array[i] = Math.floor(Math.random() * 100 + 2).toString() + ` ${array[i]}s!!!`;
}
