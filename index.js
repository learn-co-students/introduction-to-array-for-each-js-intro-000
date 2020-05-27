// Add your doToElementsInArray() function here:

function doToElementsInArray(array, callback) {
    array.forEach(callback);
  }

// Add your changeCompletely() function here
// This function changes the original array

function changeCompletely(element, index, array) {
    array[index] = Math.floor(Math.random() * 100 + 2).toString() + ` ${array[index]}s!!!`;
  }

