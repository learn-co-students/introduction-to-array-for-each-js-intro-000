function doToElementsInArray(array, callback) {
  array.forEach(callback);
}

function changeCompletely(element, index, array) {
  array[index] = Math.floor(Math.random() * 100 + 2).toString() + ` ${array[index]}s!!!`;
}

// Add your doToElementsInArray() function here:


// Add your changeCompletely() function here:
