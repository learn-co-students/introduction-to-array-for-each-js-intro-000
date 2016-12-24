function changeCompletely(element, index, array) {
  array[index] = `${Math.random() * 100}!!!`
}

function doToElementsInArray(array, callback) {
  array.forEach(callback);
}