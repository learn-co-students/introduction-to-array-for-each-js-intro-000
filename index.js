function doToElementsInArray(array, callback) {
  array.forEach(callback);
}

function changeCompletely(element, index, array) {
  array[index] = element + 1
}

doToElementsInArray(["Danny", "Laura", "Lauren", "Marvin", "George"], changeCompletely)
