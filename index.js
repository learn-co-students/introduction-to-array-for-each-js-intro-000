// Add your doToElementsInArray() function here:
function doToElementsInArray(arr, myFunc) {
  arr.forEach(myFunc);
}

// Add your changeCompletely() function here:
function changeCompletely(item, index, array) {
  array[index] = `${item}!!!`;
}