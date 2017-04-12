function changeCompletely(element, index, array) {
  array[index] = (Math.random() * 100).toString() + '!!!'
}

function doToElementsInArray(array, callback) {
  for (var i = 0; i < array.length; i++) {
    callback(array[i]);
  }
}
