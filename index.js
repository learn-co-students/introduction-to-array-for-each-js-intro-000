// Add your doToElementsInArray() function here:
function doToElementsInArray(array, callback) {
  array.forEach(callback);
}
doToElementsInArray(array);

// Add your changeCompletely() function here:
function changeCompletely(element, index, array) {
  array[index] = 'blue';
}
