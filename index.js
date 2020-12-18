// Add your doToElementsInArray() function here:
function doToElementsInArray(arr, call) {
  arr.forEach(call);
}

// Add your changeCompletely() function here:
function changeCompletely(elm, idx, arr) {
  arr[idx] = Math.floor(Math.random() * 100 + 2).toString() + ` ${arr[idx]}s!!!`;
}
