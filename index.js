// Add your doToElementsInArray() function here:
function doToElementsInArray(array, callback) {
  array.forEach(callback);
}

// Add your changeCompletely() function here:
function changeCompletely(el, ind, arr) {
  arr[ind] = `${arr[ind]}some`;
}
