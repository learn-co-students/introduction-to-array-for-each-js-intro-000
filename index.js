// declare function with 3 elements
function changeCompletely(element, index, array) {
  array[index] = element + '!!!'
}

// calls back OG function
function doToElementsInArray(array, callback) {
  array.forEach(callback)
}
