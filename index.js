// Add your doToElementsInArray() function here:
function doToElementsInArray(array, callback) {
  return array.forEach(callback)
}

// Add your changeCompletely() function here:
function changeCompletely(elements, index, array) {
  array[index] = "hello"
}
