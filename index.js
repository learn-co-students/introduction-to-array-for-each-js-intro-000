// Add your doToElementsInArray() function here:
function doToElementsInArray(arr, callback) {
  arr.forEach(callback);
}

// Add your changeCompletely() function here:
function changeCompletely(element, ind, arr) {
  arr[ind] = `${arr[ind]}s`;
  
}