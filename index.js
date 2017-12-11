// Add your doToElementsInArray() function here:
function doToElementsInArray(array, callback) {
  array.forEach(callback);
}

// Add your changeCompletely() function here:
function changeCompletely(element, index, array) {
  array[index] = Math.floor(Math.random() * 100 + 2).toString() + `${array[index]}s!!!`;
}
// Getting a variety of strange errors in the test, seems unrelated to the code I added
// Local package.json exists, but node_modules missing, did you mean to install?
// Test isn't marking as completed in my console, but learn.co considers it passed.
// Chalking this up to an error, since it submitted fine, and moving on?
