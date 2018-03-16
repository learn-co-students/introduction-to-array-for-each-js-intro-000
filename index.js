// Add your doToElementsInArray() function here:
function doToElementsInArray(array, callback) {
  return array.forEach(callback)
}

// Add your changeCompletely() function here:
function changeCompletely(element, index, array) {
  array[index] = element + "!!!"
}
