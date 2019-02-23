// Add your doToElementsInArray() function here:
function doToElementsInArray(a, f) {
  a.forEach(f);
}

// Add your changeCompletely() function here:
function changeCompletely(element, i, array) {
  array[i] = Math.random() * 100;
}
