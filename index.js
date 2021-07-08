function doToElementsInArray(array, callback) {
  array.forEach(callback)
  return
}

// Add your changeCompletely() function here:
function changeCompletely(element, index, array) {
  array[index] = Math.floor(Math.random() * 100 + 2).toString() + ` ${array[index]}s!!!`;
}
