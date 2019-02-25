// Add your doToElementsInArray() function here:
function doToElementsInArray(array, callback) {
  array.forEach(callback);
}

// Add your changeCompletely() function here:
function changeCompletely(value, index, array) {
  array[index] = "I changed " + array[index] + "!!!";
}
